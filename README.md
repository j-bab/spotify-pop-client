# Serverless API client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can test it running live [here](https://dl2yzj7b8qvo8.cloudfront.net/)

## Configuration and getting started

If you haven't already, first [deploy your infrastructure](https://github.com/j-bab/pop-spotify-serverless):

in package.json replace the following placeholders with values from the Infrastructure created above:  
YOUR_BUCKET_NAME - replace this with the name of the s3 AppBucket you wish to deploy to.
YOUR_CF_DIST_ID - replace this with the cloudFront distribution ID that this bucket will be served over.

in the .env files set REACT_APP_API_GATEWAY to your Api Gateway endpoint  

run `npm install` to install the required dependencies.


## Deployment

In the project directory, you can run:

### `npm run deploy`

Your app will be built, synced to s3, and finally the cloudFront distribution cache will be invalidated.

## Troubleshooting

If, quickly after deploying the infrastructure, you navigate to the domain of your cloudFront distribution it may redirect to the s3 buckets url.  

This is a temporary dns issue on a newly built distribution and should resolve itself with time.  
If, after a while, this is still the case, try invalidating the cf distro or redeploying this as the redirect can sometimes be cached.

##Testing

Run `npm run test` to launch the testing suite.  