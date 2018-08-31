Raven.configure do |config|
  config.sanitize_fields = Rails.application.config.filter_parameters.map(&:to_s)

  if Rails.env.test?
    config.logger = Logger.new("/dev/null")
  end

  config.silence_ready = true

  if !Rails.env.production?
    config.processors -= [Raven::Processor::PostData]
  end
end
