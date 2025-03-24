import { AlbumDataType } from '@/data/albums';
import { ArtistDataType } from '@/data/artists';

export type TrackDataType = {
  id: string;
  name: string;
  duration_ms: number;
  artists: ArtistDataType[];
  album?: AlbumDataType;
};

export const EXAMPLE_TRACK: TrackDataType = {
  id: '0MHXrqn909p0LRTPsNsGEi',
  name: 'Move on Up - Single Edit',
  duration_ms: 165789,
  artists: [
    {
      id: '2AV6XDIs32ofIJhkkDevjm',
      name: 'Curtis Mayfield',
    },
  ],
  album: {
    album_type: 'single',
    total_tracks: 1,

    id: '2EwoYRFQRJqw7BTVG6GlTw',
    name: 'Move on Up',
    release_date: '1970',
    artists: [
      {
        id: '2AV6XDIs32ofIJhkkDevjm',
        name: 'Curtis Mayfield',
      },
    ],
  },
};
