//create custom types in typescript
import { Connection } from "mongoose"
declare global{
    var mongoose:{
        conn: Connection | null,  // Connection type from mongoose either connection hoga nhi tog connection ka promise chalega at a time. Connection Promise ka type <Connection hoga issliliye usko <> mai rakhte h type declare krne k liye
        promise: Promise<Connection> | null
    }
}


export {};