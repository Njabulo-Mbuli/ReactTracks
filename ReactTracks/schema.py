import graphene
from tracksApp import schema as TracksSchema
import users.schema
import graphql_jwt

class Query(users.schema.Query,TracksSchema.Query,graphene.ObjectType):
    '''
        A list of all the queries that can be
        carried out on the tracks database
    '''
    hello = graphene.String()

    def resolve_hello(self,info):
        return "Hello from the server"

class Mutation(users.schema.Mutation,TracksSchema.Mutation,graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query,mutation=Mutation)
