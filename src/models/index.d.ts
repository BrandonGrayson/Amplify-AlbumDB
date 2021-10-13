import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AlbumMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Video {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly order?: number;
  readonly albumID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

export declare class Album {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly Videos?: (Video | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Album, AlbumMetaData>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album, AlbumMetaData>) => MutableModel<Album, AlbumMetaData> | void): Album;
}