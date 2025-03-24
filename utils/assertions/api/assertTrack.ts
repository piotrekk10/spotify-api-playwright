import {
  assertAlbum,
  assertArtistsArray,
  assertExternalId,
  assertExternalUrl,
  assertHref,
  assertUri,
} from '@/assertions/api';
import { expectToEqual } from '@/assertions/solutions';
import { TrackDataType } from '@/data/tracks';
import { TrackResponse } from '@/models/tracks';

type AssertTrackProps = {
  expectedTrack: TrackDataType;
  actualTrack: TrackResponse;
  containsAlbum?: boolean;
};

export const assertTrack = async ({
  expectedTrack,
  actualTrack,
  containsAlbum,
}: AssertTrackProps) => {
  await expectToEqual({
    actual: actualTrack.id,
    expected: expectedTrack.id,
    description: 'track "id"',
  });
  await expectToEqual({
    actual: actualTrack.name,
    expected: expectedTrack.name,
    description: 'track "name"',
  });
  await expectToEqual({
    actual: actualTrack.duration_ms,
    expected: expectedTrack.duration_ms,
    description: 'track "duration"',
  });
  await assertUri({
    actualCategory: 'track',
    actualId: actualTrack.id!,
    actualUri: actualTrack.uri!,
  });
  await assertHref({
    actualCategory: 'track',
    actualId: actualTrack.id!,
    actualHref: actualTrack.href!,
  });
  await assertExternalId({
    actualCategory: 'track',
    actualExternalId: actualTrack.external_ids!,
  });
  await assertExternalUrl({
    actualCategory: 'track',
    actualId: actualTrack.id!,
    actualExternalUrl: actualTrack.external_urls!,
  });
  await assertArtistsArray({
    actualArtists: actualTrack.artists!,
    expectedArtists: expectedTrack.artists,
  });
  if (containsAlbum) {
    await assertAlbum({
      actualAlbum: actualTrack.album!,
      expectedAlbum: expectedTrack.album!,
    });
  }
};
