var vm1 = new Vue({
    el: "#app",
    data: {
        event: {
            eventDate: "August 14th - 16th",
            eventTitle: "Summer Festival!",
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
        },
        newNameText: "",
        guestName: [],
        eventCapacity: 25,
        eventCapacityPercentage: 0,
    },
    methods: {
        formSubmitted: function () {
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText.toLowerCase());
                this.newNameText = "";
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
            }
        },
    },
    computed: {
        sortNames: function () {
            return this.guestName.sort();
        },
    },
    watch: {
        guestName: function (data) {
            console.log("guestName is triggered");
        },
    },
    filters: {
        formatName: function (value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        },
    },
});

var vm2 = new Vue({
    el: "#navigation",
    data: {
        appName: "Guest List",
        navLinks: [
            { name: "Home", id: 1, url: "https://vuejs.org/v2/guide/" },
            { name: "Upcoming Events", id: 2, url: "https://www.google.com" },
            { name: "Guest Benefits", id: 3, url: "https://www.google.com" },
            { name: "Latest News", id: 4, url: "https://www.google.com" },
        ],
    },
    methods: {
        changeCapacity: function () {
            vm1.eventCapacity = 15;
        },
    },
});
