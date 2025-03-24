import { ArtistDataType } from '@/data/artists';
import { TrackDataType } from '@/data/tracks';

export type AlbumDataType = {
  album_type: 'album' | 'single' | 'compilation';
  total_tracks: number;
  id: string;
  name: string;
  release_date: string;
  artists: ArtistDataType[];
  tracks?: Tracks;
};

type Tracks = {
  total: number;
  items: TrackDataType[];
};

export const EXAMPLE_ALBUM: AlbumDataType = {
  album_type: 'album',
  total_tracks: 18,
  id: '4aawyAB9vmqN3uQ7FjRGTy',
  name: 'Global Warming',
  release_date: '2012-11-16',
  artists: [
    {
      id: '0TnOYISbd1XYRBk9myaseg',
      name: 'Pitbull',
    },
  ],
  tracks: {
    total: 18,
    items: [
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '7iJrDbKM5fEkGdm5kpjFzS',
            name: 'Sensato',
          },
        ],
        duration_ms: 85400,
        id: '6OmhkSOpvYBokMKQxpIGx2',
        name: 'Global Warming (feat. Sensato)',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '2L8yW8GIoirHEdeW4bWQXq',
            name: 'TJR',
          },
        ],

        duration_ms: 206120,
        id: '2iblMMIgSznA464mNov7A8',
        name: "Don't Stop the Party (feat. TJR)",
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '1l7ZsJRRS8wlW3WfJfPfNS',
            name: 'Christina Aguilera',
          },
        ],

        duration_ms: 229506,

        id: '4yOn1TEcfsKHUJCL2h1r8I',
        name: 'Feel This Moment (feat. Christina Aguilera)',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
        ],

        duration_ms: 207440,

        id: '7fmpKF0rLGPnP7kcQ5ZMm7',
        name: 'Back in Time - featured in "Men In Black 3"',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '7bXgB6jMjp9ATFy66eO08Z',
            name: 'Chris Brown',
          },
        ],

        duration_ms: 221133,

        id: '3jStb2imKd6oUoBT1zq5lp',
        name: 'Hope We Meet Again (feat. Chris Brown)',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '23zg3TcAtWQy7J6upgbUnj',
            name: 'USHER',
          },
          {
            id: '4D75GcNG95ebPtNvoNVXhz',
            name: 'AFROJACK',
          },
        ],

        duration_ms: 243160,

        id: '0QTVwqcOsYd73AOkYkk0Hg',
        name: 'Drinks for You (Ladies Anthem) (feat. J. Lo)',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '2NhdGz9EDv2FeUw6udu2g1',
            name: 'The Wanted',
          },
          {
            id: '4D75GcNG95ebPtNvoNVXhz',
            name: 'AFROJACK',
          },
        ],

        duration_ms: 244920,

        id: '0fjRYHFz9ealui1lfnN8it',
        name: "Echa Pa'lla (Manos Pa'rriba) (feat. Papayo)",
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '0z4gvV4rjIZ9wHck67ucSV',
            name: 'Akon',
          },
          {
            id: '5IqWDVLGThjmkm22e3oBU3',
            name: 'David Rush',
          },
        ],

        duration_ms: 257613,

        id: '2JA6A6Y5f4m7PawM58U2Op',
        name: 'Get It Started (feat. Shakira)',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '3BnF35ARlp8mMeyXTjUZsr',
            name: 'Vein',
          },
        ],

        duration_ms: 217680,

        id: '6GPER1Sx8MrBiwWxdulg5Q',
        name: 'Rain Over Me (feat. Marc Anthony) - Benny Benassi Remix',
      },
      {
        artists: [
          {
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'Pitbull',
          },
          {
            id: '7bXgB6jMjp9ATFy66eO08Z',
            name: 'Chris Brown',
          },
          {
            id: '5I7l0lSOyusetwCv1aQPMf',
            name: 'Jump Smokers',
          },
        ],

        duration_ms: 309626,

        id: '4TWgcICXXfGty8MHGWJ4Ne',
        name: 'International Love (feat. Chris Brown) - Jump Smokers Extended Mix',
      },
    ],
  },
};
