# nodejs-authentication-with-JWT

#what is JSON Web Token?
    compact and self-contained way for securely transmitting information between parties as JSON objects.

    this information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret key or a public / private key pair.


#why JSON Web Token?
    good choice to be passed html and http environment due to its smaller footprint when compared to other types of tokens.
    
    it can be signed using a shared secret and also by using a public / private key pair.

    it is easier to work with JWT as JSON parsers are common in most programming languages.

    it is also suitable for implementing authorization in large scale web applications.


#Structure of JSON Web Token
    header - consists of two parts:
        type - identifies the type of token i.e. JWT.
        alg - identifies the algorithm used to sign the token i.e. SHA512.

    payload - contains the claims that provide information about a user who has been authenticated along with the other information like token expiry time.

    signature - contains the signature of the token.



#JSON Web Token Use case
    -authorization

    -information exchange between parties


#Demo

