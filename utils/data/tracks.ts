import { ArtistResponse } from "../types/api/artists/artistResponse";

export type TrackDataType = {
  id: string;
  name: string;
  uri: string;
  artists: ArtistResponse[];
};

export const EXAMPLE_TRACK: TrackDataType = {
  id: "0MHXrqn909p0LRTPsNsGEi",
  name: "Move on Up - Single Edit",
  uri: "spotify:track:0MHXrqn909p0LRTPsNsGEi",
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2AV6XDIs32ofIJhkkDevjm",
      },
      href: "https://api.spotify.com/v1/artists/2AV6XDIs32ofIJhkkDevjm",
      id: "2AV6XDIs32ofIJhkkDevjm",
      name: "Curtis Mayfield",
      type: "artist",
      uri: "spotify:artist:2AV6XDIs32ofIJhkkDevjm",
    },
  ],
};
