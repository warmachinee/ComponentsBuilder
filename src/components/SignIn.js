import React, { useState, useEffect} from 'react'
import { Desktop, Tablet, Mobile } from './ResponsiveDevice'
import Dialog from './Dialog'

function SignInForm(){
  return(
    <React.Fragment>
      <p style={{textAlign: 'center'}}>Accound system coming soon ....</p>
      <div style={{width: '100%',height: '10rem'}}></div>
    </React.Fragment>
  );
}
function SignIn(props){
  return(
    <React.Fragment>
      <Mobile>
        <Dialog show={props.show} close={props.close}>
          <SignInForm />
        </Dialog>
      </Mobile>
      <Tablet>
        <Dialog show={props.show} close={props.close}>
          <SignInForm />
        </Dialog>
      </Tablet>
      <Desktop>
        <Dialog show={props.show} close={props.close}>
          <SignInForm />
        </Dialog>
      </Desktop>
    </React.Fragment>
  );
}
export default SignIn;
