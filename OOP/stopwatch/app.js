function Stopwatch() {

    this.duration = 0;
    let time = null
    let stopT = null

    this.start = function() {
        if(time !== null){
            throw new Error('start can not be called twice')

        }
        time = new Date()
        stopT = null
    } 

    this.stop = function() {
        if(stopT !== null){
            throw new Error('stop can not be called twice')
        }
        stopT = new Date()
        if(this.duration !== 0){
            this.duration += ((stopT.getTime() - time.getTime()) / 1000)
            time = null
        }else{
            this.duration = (stopT.getTime() - time.getTime()) / 1000;
            time = null
        }
    }

    this.reset = function() {
        this.duration = 0;
        time = null
        stopT = null
    
    }
    }

const sw = new Stopwatch()

