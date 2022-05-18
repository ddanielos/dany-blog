
import  sanityClient  from "@sanity/client";

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: "2022-05-15"
  // use Cdn === true, gives you fast response, it will get you 
  // cached data
  // use Cdn === false, gives you little bit slower response, but latest data
}

export default sanityClient(options);