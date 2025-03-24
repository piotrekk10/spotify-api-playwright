import {
  assertExternalUrl,
  assertHref,
  assertImagesArray,
  assertUri,
} from '@/assertions/api';
import { expectToEqual } from '@/assertions/solutions';
import { ArtistDataType } from '@/data/artists';
import { Artist, ArtistResponse } from '@/models/artists';

type AssertArtistProps = {
  expectedArtist: ArtistDataType;
  actualArtist: Artist;
};

type AssertArtistsArrayProps = {
  expectedArtists: ArtistDataType[];
  actualArtists: Artist[];
};

type AssertArtistResponseProps = {
  expectedArtist: ArtistDataType;
  actualArtist: ArtistResponse;
};

export const assertArtist = async ({
  expectedArtist,
  actualArtist,
}: AssertArtistProps) => {
  await expectToEqual({
    actual: actualArtist.id,
    expected: expectedArtist.id,
    description: 'artist "id"',
  });
  await expectToEqual({
    actual: actualArtist.name,
    expected: expectedArtist.name,
    description: 'artist "name"',
  });
  await assertUri({
    actualCategory: 'artist',
    actualId: actualArtist.id!,
    actualUri: actualArtist.uri!,
  });
  await assertHref({
    actualCategory: 'artist',
    actualId: actualArtist.id!,
    actualHref: actualArtist.href!,
  });
  await assertExternalUrl({
    actualCategory: 'artist',
    actualId: actualArtist.id!,
    actualExternalUrl: actualArtist.external_urls!,
  });
};

export const assertArtistResponse = async ({
  expectedArtist,
  actualArtist,
}: AssertArtistResponseProps) => {
  await assertArtist({ expectedArtist, actualArtist });
  await assertImagesArray({
    actualImages: actualArtist.images!,
  });
};

export const assertArtistsArray = async ({
  expectedArtists,
  actualArtists,
}: AssertArtistsArrayProps) => {
  await expectToEqual({
    actual: actualArtists.length,
    expected: expectedArtists.length,
    description: 'artists array length',
  });
  const actualArtistsMap = new Map(
    actualArtists.map((artist) => [artist.id, artist]),
  );

  for (const expectedArtist of expectedArtists) {
    const actualArtist = actualArtistsMap.get(expectedArtist.id);
    if (actualArtist) {
      await assertArtist({
        actualArtist,
        expectedArtist,
      });
    }
  }
};
