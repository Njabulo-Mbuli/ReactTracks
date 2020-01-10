import graphene
#from tracks import schema as TrackSchema

import graphql_jwt

class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(self,info):
        return "Hello from the server"

schema = graphene.Schema(query=Query)
result = schema.execute('{hello}')
print(result.data['hello'])
