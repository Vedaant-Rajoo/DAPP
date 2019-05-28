# DAPP for election
My first decentralized application made in the ethereum blockchain network

### In the truffle console enter:
 Election.deployed().then(function(instance){ app = instance})
promise of the deployed contarct.
## SMOKE TEST

truffle(development)> app.address

'0xC659d48F4A264AbF4970FbC84DA237A28ea25cF4'

truffle(development)> app.candidate()

'Candidate 1'
