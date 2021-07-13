module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      url: String,
      ttfb: String,
      fcp: String,
      domLoad: String,
      windowLoad: String,
      networkTiming: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Analytics = mongoose.model("analytics", schema);
  return Analytics;
};
