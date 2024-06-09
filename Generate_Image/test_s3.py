import boto3

# Create a session using the default AWS profile
session = boto3.Session()

# Create an S3 client
s3 = session.client('s3')

# List S3 buckets
response = s3.list_buckets()

# Print bucket names
print('S3 Buckets:')
for bucket in response['Buckets']:
    print(f'  {bucket["Name"]}')
