const { incrementVisitorsCount } = requir('./index');

export default async (req, res) => {
    const databaseName = req.query.dbname;
    const response = await incrementVisitorsCount(databaseName);
    console.log("Visits:", response);
    res.status(200).json({ 
              status: 200,
              creator: creator,
              results: {
                visitors: response
              }
            });
    }

