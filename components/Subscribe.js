
import { GrFormClose } from 'react-icons/gr'

export default function Subscribe() {
	const add_email = event => {
		const scriptURL = 'https://script.google.com/macros/s/AKfycbxYYrHnyNMbwch8bMsNJXzBSC9KAKWkiABVd_QGRQ7zU3vK7aHMQdzmVT_HHj3cFjkW/exec'
		const form = document.getElementById("submit-to-google-sheet");
		var email_data = document.getElementById("email_input").value;
		event.preventDefault();
		if (validate_email(email_data)){
			const data = form.cloneNode(true);
			form.reset();
			event.preventDefault();
			document.getElementById("submit-to-google-sheet")[0].setAttribute("disabled", "disabled");
			document.getElementById("submit-to-google-sheet")[0].setAttribute("placeholder", "Processing....");
			fetch(scriptURL, { method: 'POST', body: new FormData(data)})
			.then(response => email_validation_message(true))
			.catch(error => console.error('Error!', error.message))
		}
		else {
			form.reset();
			email_validation_message(false);
		} 
	}
	function email_validation_message(messageType){
		if(messageType){
			document.getElementById("submit-to-google-sheet")[0].setAttribute("placeholder", "Success");
			document.getElementById("submit-to-google-sheet")[0].setAttribute("disabled", "disabled");
			document.getElementById("submitted_banner").classList.remove("hidden");
		} 
		else {
			document.getElementById("submit-to-google-sheet")[0].setAttribute("placeholder", "Failed");
			document.getElementById("submit-to-google-sheet")[0].setAttribute("disabled", "disabled");
			document.getElementById("failed_banner").classList.remove("hidden");
		}
	}
	function validate_email(inputText) {
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return (inputText.match(mailformat) ? true : false);
	}
	function reset_email(banner_type) {
		if(banner_type){
			document.getElementById("submitted_banner").classList.add("hidden");
		} 
		else {
			document.getElementById("failed_banner").classList.add("hidden");
		}
		document.getElementById("submit-to-google-sheet")[0].setAttribute("placeholder", "Enter Your Email Address");
		document.getElementById("submit-to-google-sheet")[0].removeAttribute("disabled");
	}
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="px-6 py-6 bg-blue-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
				<div className="xl:w-0 xl:flex-1">
					<h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">Get on the whitelist.</h2>
				</div>
				<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
					<form className="flex" id="submit-to-google-sheet" name="submit-to-google-sheet" autoComplete="on" target="_self" method="POST">
						<input id="email_input" type="email" name="email" className="w-screen rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 bg-gray-100" placeholder="Enter your email"/>
						<button onClick={add_email} type="submit" className="px-2 sm:px-8 rounded-r-lg bg-yellow-300 text-gray-800 font-bold p-4 uppercase">Subscribe</button>
					</form>
					<div className="hidden flex space-x-2" id="submitted_banner">
						<h3 className="text-green-300">Your email was subscribed to the whitelist</h3>
						<button onClick={() => reset_email(true)}><i><GrFormClose size={20}/></i></button>
					</div>
					<div className="hidden flex space-x-2" id="failed_banner">
						<h3 className="text-red-400">Please submit a valid email</h3>
						<button onClick={() => reset_email(false)}><i><GrFormClose size={20}/></i></button>
					</div>
					<p className="mt-3 text-sm leading-5 text-indigo-200">
						Your data will never be sold, at Autonomy we value privacy.
					</p>
				</div>
			</div>
        </div>
    )
}

