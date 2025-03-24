import {
  assertArtistsArray,
  assertExternalUrl,
  assertHref,
  assertImagesArray,
  assertTrack,
  assertUri,
} from '@/assertions/api';
import { expectToEqual } from '@/assertions/solutions';
import { AlbumDataType } from '@/data/albums';
import { Album, AlbumResponse } from '@/models/albums';

type AssertAlbumProps = {
  expectedAlbum: AlbumDataType;
  actualAlbum: Album;
};

type AssertAlbumResponseProps = {
  expectedAlbum: AlbumDataType;
  actualAlbum: AlbumResponse;
};

export const assertAlbum = async ({
  expectedAlbum,
  actualAlbum,
}: AssertAlbumProps) => {
  await expectToEqual({
    actual: actualAlbum.id,
    expected: expectedAlbum.id,
    description: 'album "id"',
  });
  await expectToEqual({
    actual: actualAlbum.name,
    expected: expectedAlbum.name,
    description: 'album "name"',
  });
  await expectToEqual({
    actual: actualAlbum.album_type,
    expected: expectedAlbum.album_type,
    description: 'album "type"',
  });
  await expectToEqual({
    actual: actualAlbum.total_tracks,
    expected: expectedAlbum.total_tracks,
    description: 'album "total_tracks count"',
  });
  await expectToEqual({
    actual: actualAlbum.release_date,
    expected: expectedAlbum.release_date,
    description: 'album "release_date"',
  });
  await assertUri({
    actualCategory: 'album',
    actualId: actualAlbum.id,
    actualUri: actualAlbum.uri,
  });
  await assertHref({
    actualCategory: 'album',
    actualId: actualAlbum.id,
    actualHref: actualAlbum.href,
  });
  await assertExternalUrl({
    actualCategory: 'album',
    actualId: actualAlbum.id,
    actualExternalUrl: actualAlbum.external_urls,
  });
  await assertArtistsArray({
    actualArtists: actualAlbum.artists,
    expectedArtists: expectedAlbum.artists,
  });
  await assertImagesArray({
    actualImages: actualAlbum.images!,
  });
};

export const assertAlbumResponse = async ({
  expectedAlbum,
  actualAlbum,
}: AssertAlbumResponseProps) => {
  await assertAlbum({ expectedAlbum, actualAlbum });
  const actualTracksMap = new Map(
    actualAlbum.tracks.items.map((item) => [item.id, item]),
  );
  await expectToEqual({
    actual: actualAlbum.tracks.total,
    expected: expectedAlbum.tracks?.total,
    description: 'tracks total',
  });
  for (const expectedTrack of expectedAlbum.tracks!.items) {
    const actualTrack = actualTracksMap.get(expectedTrack.id);
    if (actualTrack) {
      await assertTrack({
        actualTrack,
        expectedTrack,
      });
    }
  }
};
