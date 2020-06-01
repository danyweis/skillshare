function Stopwatch() {
    //COMMENTED CODE IS WITHOUT PROTOTYPE
    let startTime,
        endTime,
        running,
        duration = 0;
    // this.start = function () {
    //     if (running) throw new Error("Stopwatch is already running.");
    //     running = true;
    //     startTime = new Date();
    // };
    // this.stop = function () {
    //     if (!running) throw new Error("Stopwatch not running yet.");
    //     running = false;
    //     endTime = new Date();
    //     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    //     duration += seconds;
    // };
    // this.reset = function () {
    //     startTime = null;
    //     endTime = null;
    //     running = null;
    //     duration = null;
    // };
    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
        set: function (value) {
            duration = value;
        },
    });

    Object.defineProperty(this, "startTime", {
        get: function () {
            return startTime;
        },
    });

    Object.defineProperty(this, "endTime", {
        get: function () {
            return endTime;
        },
    });
    Object.defineProperty(this, "running", {
        get: function () {
            return running;
        },
    });
}
// Stopwatch.prototype.running = null;
// Stopwatch.prototype.startTime = null;
// Stopwatch.prototype.endTime = null;
// Stopwatch.prototype.duration = 0;
Stopwatch.prototype.start = function () {
    if (this.running) throw new Error("Stopwatch is already running.");
    this.running = true;
    this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!this.running) throw new Error("Stopwatch not running yet.");
    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = null;
    this.duration = 0;
};

// // MY SOLUTION

// function Stopwatch() {
//     this.duration = 0;
//     let time = null;
//     let stopT = null;

//     this.start = function () {
//         if (time !== null) {
//             throw new Error("start can not be called twice");
//         }
//         time = new Date();
//         stopT = null;
//     };

//     this.stop = function () {
//         if (stopT !== null) {
//             throw new Error("stop can not be called twice");
//         }
//         stopT = new Date();
//         if (this.duration !== 0) {
//             this.duration += (stopT.getTime() - time.getTime()) / 1000;
//             time = null;
//         } else {
//             this.duration = (stopT.getTime() - time.getTime()) / 1000;
//             time = null;
//         }
//     };

//     this.reset = function () {
//         this.duration = 0;
//         time = null;
//         stopT = null;
//     };
// }

const sw = new Stopwatch();
