import { ProjectList } from './App/ProjectList.js';

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(
            finishProjectsList.addProject.bind(finishProjectsList)
        );

        finishProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );

        // document.getElementById('start-analytics-btn').addEventListener('click', this.startAnalytics);
        setTimeout(this.startAnalytics, 3000);
    }

    static startAnalytics() {
        const analyticsScript = document.createElement('script');
        analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
        analyticsScript.defer = true;

        document.head.append(analyticsScript);

    }
}

App.init();