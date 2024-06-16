import { Notification } from "@/types/notification.interface"
import { create } from "zustand";

type NotificationState = {
    // for our notification list
    notifications:Notification[];

    // defiend functions that use in store becuase acsses to store value well be easly 
    showNotification: (notification: Omit <Notification, 'id'>) => void;
    dismissNotification:(id:string) =>void
}

export const useNotificationStore = create<NotificationState>(
    // for set our state and get our state values 
    (set,get)=>({
       notifications : [],
       showNotification:(notification)=>{},
       dismissNotification:(id)=>{
            set((state)=>({
                notifications:state.notifications.filter(p=>p.id !==id)
            }))
       } 
    })
)