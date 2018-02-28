var AWS =  require('aws-sdk');

var ecs = new AWS.ECS({
  region: 'us-east-1'}
  );

var params = {
 };

var clusterName = '';

ecs.listClusters(params, function(err, clusterName) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(clusterName); 

})
debugger

var paramsDescribeCluster = {
  clusters: clusterName.clusterArns
};

// Describe ECS Cluster
ecs.describeClusters(paramsDescribeCluster, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
});


var stringClusterName = clusterName.clusterArns.toString()

var paramsListContInstances = {
  cluster: stringClusterName
}

//List container instance and get instance ID and describe that container
ecs.listContainerInstances(paramsListContInstances, function(err, dataList) {
    if (err) console.log(err, err.stack); // an error occurred
    
    else {
      console.log(dataList);
      var paramsDescribeContInstances = {
        cluster: "getting-started",
        containerInstances: dataList.containerInstanceArns
      };

      ecs.describeContainerInstances(paramsDescribeContInstances, function(err, dataDes) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(dataDes);
      });
  }
});








