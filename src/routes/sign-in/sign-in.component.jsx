
import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'


const SignIn=()=>{

    const logGoogleUser= async()=>{ //when make call to database it must be async
        const response= await signInWithGooglePopup();
        console.log(response);


    }
    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;