import { observable, action, autorun, computed, runInAction } from 'mobx';

import launch from '../assets/launch.json';
import launchSite from '../assets/launch_site.json';
import rocket from '../assets/rocket.json';

class MainStore {
    @observable currentViewName = 'list';  // 'list' / 'details'

    @observable rocketNames = ["Falcon 1", "Falcon 9", "Falcon 10"];

    @observable launchesList = {
        rocketFilter: null,
        isLoading: true,
        isFailed: false,
        lauchesData: [],
    }

    @observable launchDetails = {
        launch: launch,
        launchSite: launchSite,
        rocket: rocket
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
    get isFetchFailed() {
        return !this.launchesList.isLoading && this.launchesList.isFailed;
    }

    constructor() {
        // todo autorun fetching data
        autorun(() => this.fetchLaunches()) // not sure... from docs: Autoruns are about initiating effects, not about producing new values.
        // todo depends on currentViewName and rocketFilter
    }

    @action
    switchView(viewName){
        this.currentViewName = viewName;
    }

    @action
    async setFilter(rocketFilter){
        this.launchesList.rocketFilter = rocketFilter;
        await this.fetchLaunches(); //done by autorun
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
}

const instance = new MainStore();

export default instance;