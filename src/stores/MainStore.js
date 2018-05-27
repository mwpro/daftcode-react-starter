import { observable, action, autorun, computed, runInAction, allowStateChanges } from 'mobx';

class MainStore {
    @observable currentViewName = 'list';

    @observable rocketNames = ["Falcon 1", "Falcon 9", "Falcon 10"];

    @observable launchesList = {
        rocketFilter: null,
        isLoading: true,
        isFailed: false,
        lauchesData: [],
    }

    @observable launch = null;

    @observable rocket = {
        isLoading: true,
        isFailed: false,
        rocketData: null
    }

    @observable site = {
        isLoading: true,
        isFailed: false,
        siteData: null
    }

    @computed
    get areLaunchesEmpty() {
        return !this.launchesList.isLoading && !this.launchesList.isFailed && this.launchesList.lauchesData.length == 0;
    }

    @computed
    get areLaunchesAvailable() {
        return !this.launchesList.isLoading && !this.launchesList.isFailed && this.launchesList.lauchesData.length > 0;
    }

    @computed
    get isLaunchesFetchFailed() {
        return !this.launchesList.isLoading && this.launchesList.isFailed;
    }

    @computed
    get isRocketAvailable() {
        return !this.rocket.isLoading && !this.rocket.isFailed;
    }

    @computed
    get isRocketFetchFailed() {
        return !this.rocket.isLoading && this.rocket.isFailed;
    }

    @computed
    get isSiteAvailable() {
        return !this.site.isLoading && !this.site.isFailed;
    }

    @computed
    get isSiteFetchFailed() {
        return !this.site.isLoading && this.site.isFailed;
    }

    constructor() {
        autorun(() => this.fetchLaunches()); // not sure... from docs: Autoruns are about initiating effects, not about producing new values.
    }

    @action
    switchView(viewName){
        this.currentViewName = viewName;
    }

    @action
    async openDetails(launch){
        this.switchView("details");
        this.launch = launch;
        this.fetchRocket();
        this.fetchLaunchSite();
    }

    @action
    async setFilter(rocketFilter){
        this.launchesList.rocketFilter = rocketFilter;
        await this.fetchLaunches();
    }
    
    @action
    async fetchLaunches() {
        try {            
            this.launchesList.isLoading = true;
            this.launchesList.isFailed = false;

            // todo would be nice to use URL and URLSearchParams classes but could not get polyfills working :( ...
            let URL = "https://api.spacexdata.com/v2/launches/all?order=desc";
            if (this.launchesList.rocketFilter !== null) {
                URL += `&rocket_name=${this.launchesList.rocketFilter}`;
            }
            const fetchResult = fetch(URL);
            const response = await fetchResult;
            if (response.status !== 200)
                throw Error(`Unexpected response from SpaceX API - ${response.status}`);
            const jsonData = await response.json();
            
            runInAction(() => this.launchesList.lauchesData = jsonData);
        }
        catch (error) {
            runInAction(() => this.launchesList.isFailed = true);
        }
        finally {
            runInAction(() => this.launchesList.isLoading = false);
        }
    }

    @action
    async fetchRocket() {
        try {            
            this.rocket.isLoading = true;
            this.rocket.isFailed = false;

            let URL = `https://api.spacexdata.com/v2/rockets/${this.launch.rocket.rocket_id}`;
            
            const fetchResult = fetch(URL);
            const response = await fetchResult;
            if (response.status !== 200)
                throw Error(`Unexpected response from SpaceX API - ${response.status}`);
            const jsonData = await response.json();
            
            runInAction(() => this.rocket.rocketData = jsonData);
        }
        catch (error) {
            runInAction(() => this.rocket.isFailed = true);
        }
        finally {
            runInAction(() => this.rocket.isLoading = false);
        }
    }

    @action
    async fetchLaunchSite() {
        try {            
            this.site.isLoading = true;
            this.site.isFailed = false;

            let URL = `https://api.spacexdata.com/v2/launchpads/${this.launch.launch_site.site_id}`;
            
            const fetchResult = fetch(URL);
            const response = await fetchResult;
            if (response.status !== 200)
                throw Error(`Unexpected response from SpaceX API - ${response.status}`);
            const jsonData = await response.json();
            
            runInAction(() => this.site.siteData = jsonData);
        }
        catch (error) {
            runInAction(() => this.site.isFailed = true);
        }
        finally {
            runInAction(() => this.site.isLoading = false);
        }
    }
}

const instance = new MainStore();

export default instance;