const { getEdrvToken } = require("../authz/edrv-token");
const sdk = require('api')('@edrv/v1.0#4h7d1zkrwhwfn8');
const authToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRWV1BWS3dveS1CMkl3Y2t3YlNERCJ9.eyJodHRwczovL2FwaS5lZHJ2LmlvL2NsaWVudF9tZXRhZGF0YSI6eyJhcHBsaWNhdGlvbiI6IjYxMWI1NzEzMWFjMTU4MGVmNGZkNWE1NiJ9LCJpc3MiOiJodHRwczovL2F1dGguZWRydi5pby8iLCJzdWIiOiJGcmxNcHNUN3U3bXVYMHZvTTVPZ1g0d2h1ZkpvQm5ZRUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hcGkuZWRydi5pbyIsImlhdCI6MTYyOTIyMDAxMCwiZXhwIjoxNjMwMDg0MDEwLCJhenAiOiJGcmxNcHNUN3U3bXVYMHZvTTVPZ1g0d2h1ZkpvQm5ZRSIsInNjb3BlIjoicmVhZDphcHBsaWNhdGlvbnMgcmVhZDphcHBsaWNhdGlvbnMvOmlkIHJlYWQ6Y2hhcmdlc3RhdGlvbnMgcmVhZDpjaGFyZ2VzdGF0aW9ucy86aWQgcmVhZDpjaGFyZ2VzdGF0aW9ucy86aWQvY29ubmVjdG9ycyByZWFkOmNsaWVudHMgcmVhZDpjb21tYW5kcyByZWFkOmNvbmZpZ3VyYXRpb25zIHJlYWQ6Y29uZmlndXJhdGlvbnMvOmlkIHJlYWQ6Y29ubmVjdG9ycyByZWFkOmNvbm5lY3RvcnMvOmlkIHJlYWQ6Y29ubmVjdC9zdHJpcGUgcmVhZDpjb25uZWN0L3N0cmlwZS9zdGF0dXMgcmVhZDpkcml2ZXJzIHJlYWQ6ZHJpdmVycy86aWQgcmVhZDpsb2NhdGlvbnMgcmVhZDpsb2NhdGlvbnMvOmlkIHJlYWQ6b3JnYW5pemF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbnMvOmlkIHJlYWQ6cmF0ZXMgcmVhZDpyYXRlcy86aWQgcmVhZDpyZWFsdGltZSByZWFkOnJlc2VydmF0aW9ucyByZWFkOnJlc2VydmF0aW9ucy86aWQgcmVhZDpzdGF0cy86YXNzZXQvOnN0YXRpc3RpYyByZWFkOnRva2VucyByZWFkOnRva2Vucy86aWQgcmVhZDp0cmFuc2FjdGlvbnMgcmVhZDp0cmFuc2FjdGlvbnMvZXhwb3J0IHJlYWQ6dHJhbnNhY3Rpb25zLzppZCByZWFkOnRyYW5zYWN0aW9ucy86aWQvY29zdCByZWFkOnVzZXJzIHJlYWQ6dXNlcnMvY3VycmVudCByZWFkOnVzZXJzLzppZCByZWFkOnZlaGljbGVzIHJlYWQ6dmVoaWNsZXMvOmlkIHJlYWQ6dmVoaWNsZXMvOmlkL2JhdHRlcnkgcmVhZDp2ZWhpY2xlcy86aWQvY2hhcmdlIHJlYWQ6dmVoaWNsZXMvOmlkL2xvY2F0aW9uIHJlYWQ6dmVoaWNsZXMvOmlkL29kb21ldGVyIHdyaXRlOmFkaG9jL3BheW1lbnRzIHdyaXRlOmFwcGxpY2F0aW9ucyB3cml0ZTphcHBsaWNhdGlvbnMvOmlkIHdyaXRlOmNoYXJnZXN0YXRpb25zIHdyaXRlOmNoYXJnZXN0YXRpb25zLzppZCB3cml0ZTpjbGllbnRzIHdyaXRlOmNvbW1hbmRzL2NhbmNlbHJlc2VydmF0aW9uIHdyaXRlOmNvbW1hbmRzL2NoYW5nZWF2YWlsYWJpbGl0eSB3cml0ZTpjb21tYW5kcy9yZW1vdGVzdGFydCB3cml0ZTpjb21tYW5kcy9yZW1vdGVzdG9wIHdyaXRlOmNvbW1hbmRzL3Jlc2VydmUgd3JpdGU6Y29tbWFuZHMvcmVzZXQgd3JpdGU6Y29tbWFuZHMvdW5sb2NrY29ubmVjdG9yIHdyaXRlOmNvbW1hbmRzL2dldGRpYWdub3N0aWNzIHdyaXRlOmNvbW1hbmRzL3VwZGF0ZWZpcm13YXJlIHdyaXRlOmNvbmZpZ3VyYXRpb25zIHdyaXRlOmNvbmZpZ3VyYXRpb25zLzppZCB3cml0ZTpjb25uZWN0b3JzIHdyaXRlOmNvbm5lY3RvcnMvOmlkIHdyaXRlOmRyaXZlcnMgd3JpdGU6ZHJpdmVycy86aWQgd3JpdGU6ZmlsZXMvdXBsb2FkIHdyaXRlOmxvY2F0aW9ucyB3cml0ZTpsb2NhdGlvbnMvOmlkIHdyaXRlOm9yZ2FuaXphdGlvbnMgd3JpdGU6b3JnYW5pemF0aW9ucy86aWQgd3JpdGU6cmF0ZXMgd3JpdGU6cmF0ZXMvOmlkIHdyaXRlOnJlc2VydmF0aW9ucyB3cml0ZTpyZXNlcnZhdGlvbnMvOmlkIHdyaXRlOnRva2VucyB3cml0ZTp0b2tlbnMvOmlkIHdyaXRlOnRyYW5zYWN0aW9ucyB3cml0ZTp0cmFuc2FjdGlvbnMvOmlkIHdyaXRlOnVzZXJzIHdyaXRlOnVzZXJzL2N1cnJlbnQgd3JpdGU6dXNlcnMvOmlkIHdyaXRlOnVzZXJzL29uYm9hcmQgd3JpdGU6dmVoaWNsZXMvOmlkL2NoYXJnZSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbInJlYWQ6YXBwbGljYXRpb25zIiwicmVhZDphcHBsaWNhdGlvbnMvOmlkIiwicmVhZDpjaGFyZ2VzdGF0aW9ucyIsInJlYWQ6Y2hhcmdlc3RhdGlvbnMvOmlkIiwicmVhZDpjaGFyZ2VzdGF0aW9ucy86aWQvY29ubmVjdG9ycyIsInJlYWQ6Y2xpZW50cyIsInJlYWQ6Y29tbWFuZHMiLCJyZWFkOmNvbmZpZ3VyYXRpb25zIiwicmVhZDpjb25maWd1cmF0aW9ucy86aWQiLCJyZWFkOmNvbm5lY3RvcnMiLCJyZWFkOmNvbm5lY3RvcnMvOmlkIiwicmVhZDpjb25uZWN0L3N0cmlwZSIsInJlYWQ6Y29ubmVjdC9zdHJpcGUvc3RhdHVzIiwicmVhZDpkcml2ZXJzIiwicmVhZDpkcml2ZXJzLzppZCIsInJlYWQ6bG9jYXRpb25zIiwicmVhZDpsb2NhdGlvbnMvOmlkIiwicmVhZDpvcmdhbml6YXRpb25zIiwicmVhZDpvcmdhbml6YXRpb25zLzppZCIsInJlYWQ6cmF0ZXMiLCJyZWFkOnJhdGVzLzppZCIsInJlYWQ6cmVhbHRpbWUiLCJyZWFkOnJlc2VydmF0aW9ucyIsInJlYWQ6cmVzZXJ2YXRpb25zLzppZCIsInJlYWQ6c3RhdHMvOmFzc2V0LzpzdGF0aXN0aWMiLCJyZWFkOnRva2VucyIsInJlYWQ6dG9rZW5zLzppZCIsInJlYWQ6dHJhbnNhY3Rpb25zIiwicmVhZDp0cmFuc2FjdGlvbnMvZXhwb3J0IiwicmVhZDp0cmFuc2FjdGlvbnMvOmlkIiwicmVhZDp0cmFuc2FjdGlvbnMvOmlkL2Nvc3QiLCJyZWFkOnVzZXJzIiwicmVhZDp1c2Vycy9jdXJyZW50IiwicmVhZDp1c2Vycy86aWQiLCJyZWFkOnZlaGljbGVzIiwicmVhZDp2ZWhpY2xlcy86aWQiLCJyZWFkOnZlaGljbGVzLzppZC9iYXR0ZXJ5IiwicmVhZDp2ZWhpY2xlcy86aWQvY2hhcmdlIiwicmVhZDp2ZWhpY2xlcy86aWQvbG9jYXRpb24iLCJyZWFkOnZlaGljbGVzLzppZC9vZG9tZXRlciIsIndyaXRlOmFkaG9jL3BheW1lbnRzIiwid3JpdGU6YXBwbGljYXRpb25zIiwid3JpdGU6YXBwbGljYXRpb25zLzppZCIsIndyaXRlOmNoYXJnZXN0YXRpb25zIiwid3JpdGU6Y2hhcmdlc3RhdGlvbnMvOmlkIiwid3JpdGU6Y2xpZW50cyIsIndyaXRlOmNvbW1hbmRzL2NhbmNlbHJlc2VydmF0aW9uIiwid3JpdGU6Y29tbWFuZHMvY2hhbmdlYXZhaWxhYmlsaXR5Iiwid3JpdGU6Y29tbWFuZHMvcmVtb3Rlc3RhcnQiLCJ3cml0ZTpjb21tYW5kcy9yZW1vdGVzdG9wIiwid3JpdGU6Y29tbWFuZHMvcmVzZXJ2ZSIsIndyaXRlOmNvbW1hbmRzL3Jlc2V0Iiwid3JpdGU6Y29tbWFuZHMvdW5sb2NrY29ubmVjdG9yIiwid3JpdGU6Y29tbWFuZHMvZ2V0ZGlhZ25vc3RpY3MiLCJ3cml0ZTpjb21tYW5kcy91cGRhdGVmaXJtd2FyZSIsIndyaXRlOmNvbmZpZ3VyYXRpb25zIiwid3JpdGU6Y29uZmlndXJhdGlvbnMvOmlkIiwid3JpdGU6Y29ubmVjdG9ycyIsIndyaXRlOmNvbm5lY3RvcnMvOmlkIiwid3JpdGU6ZHJpdmVycyIsIndyaXRlOmRyaXZlcnMvOmlkIiwid3JpdGU6ZmlsZXMvdXBsb2FkIiwid3JpdGU6bG9jYXRpb25zIiwid3JpdGU6bG9jYXRpb25zLzppZCIsIndyaXRlOm9yZ2FuaXphdGlvbnMiLCJ3cml0ZTpvcmdhbml6YXRpb25zLzppZCIsIndyaXRlOnJhdGVzIiwid3JpdGU6cmF0ZXMvOmlkIiwid3JpdGU6cmVzZXJ2YXRpb25zIiwid3JpdGU6cmVzZXJ2YXRpb25zLzppZCIsIndyaXRlOnRva2VucyIsIndyaXRlOnRva2Vucy86aWQiLCJ3cml0ZTp0cmFuc2FjdGlvbnMiLCJ3cml0ZTp0cmFuc2FjdGlvbnMvOmlkIiwid3JpdGU6dXNlcnMiLCJ3cml0ZTp1c2Vycy9jdXJyZW50Iiwid3JpdGU6dXNlcnMvOmlkIiwid3JpdGU6dXNlcnMvb25ib2FyZCIsIndyaXRlOnZlaGljbGVzLzppZC9jaGFyZ2UiXX0.taGh5u0CKPrkqNWczhUN68YotBfjq0Cnkmtrf0wtlxSNiVvAWSDCel9Uocy7l7SOnqrN1yBbtnBKxYbJzaQGGvqQCqtRBAL4I-sXE7qjFruluSUme9SxTFdwz3OT4Nb_52lvw0OAUR4PUeUY7ATVtgZ-shPE-14RZPLG6EByOqmtOCa6qvuBBUSivAYmyhl97n8ulU1bippOOHL4x55-8duBLoN23nk2iga2cAUDJTDu3XifSax__4Jo2b0naHyv6847toVPZ2FHUuGvuSkNgETadGB7wBrv7jItSk6Wkfl3zdF0jkePydve_RW6HQ9Aaqv32SxuO8r7esJetD4YCQ"
sdk.auth(authToken);

const userId = "611bf014d83692356ae601ba";
const chargestationId = "61167555ef52120ef3654800";
const connectorId = "61167555ef52120ef3654806";
const tokenId = "611ce69bd83692356ae62df2";

/**
 * Service Methods
*/

const getChargeStations = async () => {
  let response = await sdk.getChargeStations({
    paginate_limit: '10',
    paginate_enabled: 'true',
    sort_by: 'createdAt',
    sort_order: 'desc'
  })
  return response;
};

const getTransactions = async () => {
    let response = await sdk.getTransactions({
      paginate_limit: '5',
      paginate_enabled: 'true',
      sort_by: 'createdAt',
      sort_order: 'desc',
      chargestation: chargestationId,
      user: userId
    })
    return response;
};

const startCharging = async () => {
    let response = await sdk.remotestart({
        token: tokenId,
        user: userId,
        connector: connectorId,
        chargestation: chargestationId,
    })
    return response;
};

const stopCharging = async (transactionId) => {
    let response = await sdk.remotestop({
        chargestation: chargestationId,
        user: userId,
        transaction: transactionId
    })
    return response;
};


module.exports = {
    getChargeStations,
    getTransactions,
    startCharging,
    stopCharging
};
