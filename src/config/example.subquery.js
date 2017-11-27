if(!this.props.data.loading){
  const label = client.readFragment({
    id: '$ROOT_QUERY.nodeQuery({"filter":{"status":true}}).entities.0',
    fragment: gql`
      fragment myLabel on NodeArticle {
        entityLabel
      }`
  });
  console.log("MAIN", this.props.data.nodeQuery);
  console.log("SUB", label);

  const person = {
    __typename: 'NodeArticle',
    id: '$ROOT_QUERY.nodeQuery({"filter":{"status":true}}).entities.0',
  };

  const shit = defaultDataIdFromObject(person);
  console.log(shit);
}