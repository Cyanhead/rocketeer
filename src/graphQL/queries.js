import { gql } from '@apollo/client';

export const LOAD_ROCKETS = gql`
  query {
    launchesPast(limit: 10, sort: "mission_name") {
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
        video_link
      }
      details
    }
  }
`;
