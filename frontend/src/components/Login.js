import React from "react";

const Login = () => {
	return (
		<section class='hero has-background-grey-light is-fullheight is-fullwidth'>
			<div class='hero-body'>
				<div class='container'>
					<div className='columns is-centered'>
						<div className='column is-4-desktop'>
							<form className='box'>
								<div className='field mt-5'>
									<label className='label'>Email or Username</label>
									<div className='controls'>
										<input type='text' className='input' placeholder='Username' />
									</div>
								</div>
								<div className='field mt-5'>
									<label className='label'>Password</label>
									<div className='controls'>
										<input type='password' className='input' placeholder='*****' />
									</div>
								</div>
								<div className='field mt-5'>
									<button className='button is-success is-fullwidth'>Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
