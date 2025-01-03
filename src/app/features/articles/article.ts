export interface Article {
  siteFeed:    SiteFeed;
  id:          number;
  title:       string;
  link:        string;
  image:       string;
  videoUrl:    string;
  pubDate:     string;
  description: string;
  comments:    any[];
  siteId:      number;
  reaction:    string;
  reactionId:  null;
  timeAgo:     string;
  clearTitle:  string;
}

export interface SiteFeed {
  percentageUp:    number;
  percentageDown:  number;
  id:              number;
  name:            string;
  country:         string;
  tagImage:        string;
  color:           string;
  urlFeed:         string;
  paternDate:      string;
  isActive:        boolean;
  isApi:           boolean;
  isChannel:       boolean;
  channelId:       string;
  ranks:           any[];
  nbRank:          number;
  nameWithRank:    string;
  nameWithoutRank: string;
}
