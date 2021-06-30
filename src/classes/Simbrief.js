export default class Simbrief {
    constructor() {
    }

    static async getRecentBooking(username){
        return await fetch('https://www.simbrief.com/api/xml.fetcher.php?username=' + username)
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => data);
    }

    static async getURL(username){
        return this.getRecentBooking(username).then((data) => {
            let directory = data.getElementsByTagName('files')[0]
                .getElementsByTagName('directory')[0]
                .firstChild
                .nodeValue;

            let pdf = data.getElementsByTagName('files')[0]
                .getElementsByTagName('pdf')[0]
                .getElementsByTagName('link')[0]
                .firstChild
                .nodeValue;
            return directory + pdf
        }).catch(() => new Error('Error searching for Flight Briefing! Check the username and try again.'));
    }
}
