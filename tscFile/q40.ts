

import { type } from "os";


type Album = {
    artist : string,
    title : string,
    trackNumber: number,
};
let make_album = (artistName: string, albumTile: string, track:number= 0) => {
   const album : Album = {
        artist : artistName,
        title : albumTile,
        trackNumber: track,
    }
    return album;
}

const album1 = make_album("K.K","Tjhe Sochta ho",4);
console.log(album1);
const album2 = make_album("Arijt Singh","chor dia woh rasta");
console.log(album2);
const album3 = make_album("Atif Aslam","woh lamhe",9);
console.log(album3);
