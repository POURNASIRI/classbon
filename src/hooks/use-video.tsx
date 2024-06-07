interface VideoState {
    isPlaying:boolean;
    currentTime:number;
    duration:number;
    isFinished:boolean;
    progress:number;
    isVideoLoaded:boolean;
    isVideoWaited:boolean
}

type videoAction = 
    | { type: "PLAY" }
    | { type: "PAUSE" }
    | { type: "TIME_UPDATE"; currentTime: number }
    | { type: "DURATION_CHANGE"; duration: number }
    | { type: "SET_FINISHED"; isFinished: boolean }
    | { type: "SET_PROGRESS"; progress: number }
    | { type: "SET_VIDEO_LOADED"; isVideoLoaded: boolean }
    | { type: "SET_VIDEO_WAITED"; isVideoWaited: boolean };


const videoReaducer = (state:VideoState, action:videoAction): VideoState => {
    switch(action.type){
            case "PLAY":
                return{...state,isPlaying:true, isFinished:false, isVideoWaited:false}
            case "PAUSE":
                return{...state, isPlaying:false};
            case "TIME_UPDATE":
                return { ...state, currentTime: action.currentTime };
            case "DURATION_CHANGE":
                return { ...state, duration: action.duration };
            case "SET_FINISHED":
                return { ...state, isFinished: action.isFinished };
            case "SET_PROGRESS":
                return { ...state, progress: action.progress };
            case "SET_VIDEO_LOADED":
                return { ...state, isVideoLoaded: action.isVideoLoaded };
            case "SET_VIDEO_WAITED":
                return { ...state, isVideoWaited: action.isVideoWaited };
            default:
                return state;
    }
} 