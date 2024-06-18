import { Notification } from "@/types/notification.interface"
import { generateID } from "@/utils/string";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
// step 1
type NotificationState = {
// step 2
    // for our notification list
    notifications:Notification[];
//step3
    // defiend functions that use in store becuase acsses to store value well be easly 
    showNotification: (notification: Omit <Notification, 'id'>) => void;
    dismissNotification:(id:string) =>void
}

// step 4
export const useNotificationStore = create<NotificationState>()(
//step5    
    // for set our state and get our state values 
    devtools((set,get)=>({
       notifications : [],
       showNotification:(notification)=>{
        //function that generate id in utils folder
        const id = generateID();
        set((state)=>({
            notifications: [...state.notifications, {id:id,...notification}]
        }));
        setTimeout(()=>{
            get().dismissNotification(id)
        },5000)
       },
       dismissNotification:(id)=>{
            set((state)=>({
                notifications:state.notifications.filter(p=>p.id !==id)
            }))
       } 
    })))


    export const showNotification = (notifications: Omit<Notification, 'id'>[])=>{
        notifications.forEach((p)=>{
            useNotificationStore.getState().showNotification(p)
        })
    }