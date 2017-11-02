require 'carrierwave/storage/fog'
CarrierWave.configure do |config|
  if Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  # Use AWS storage if in production
  if Rails.env.production? || Rails.env.development?
    CarrierWave.configure do |config|
      config.storage = :fog
    end
  end

  config.fog_credentials = {
    :provider               => 'AWS',                             # required
    :aws_access_key_id => ENV["AWS_ACCESS_KEY_ID"],
    :aws_secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"]     # required
    # :region                 => ENV['AWS_REGION']                        # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = ENV['S3_BUCKET']              # required
  #config.fog_host       = 'https://assets.example.com'           # optional, defaults to nil
  #config.fog_public     = false                                  # optional, defaults to true
  #config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}  # optional, defaults to {}

  # Use local storage if in development or test
end
