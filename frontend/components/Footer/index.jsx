import React from "react";
import s from "./footer.styles.module.scss";

function Footer() {
  return (
    <footer className={s.footer}>
  	 <div className={s.container}>
  	 	<div className={s.row}>
  	 		<div className={`${s.footerCol} ${s.footerCol1}`}>
  	 			<h4>ISTE STUDENTS' CHAPTER <br></br> NIT DURGAPUR</h4>
  	 			<ul className={s.ul1}>
  	 				<li>Made with love by WEBD Team</li>
  	 				<li>© 2022 ISTE. All Rights Reserved. </li>
  	 			</ul>
  	 		</div>
  	 		<div className={s.footerCol}>
  	 			<h4>Contact Us</h4>
  	 			<ul>
  	 				<li><a href="#">location</a></li>
  	 				<li><a href="#">phone n umber</a></li>
  	 				<li><a href="#">mail</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={s.footerCol}>
  	 			<h4>Useful Links</h4>
  	 			<ul className={s.ul}>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">Events</a></li>
  	 				<li><a href="#">Team</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className={s.footerCol}>
  	 			<h4>follow us</h4>
  	 			<div className={s.socialLinks}>
  	 				<a href="#"><i className={`${s.fab}  ${s.fafacebookf}`}></i></a>
  	 				<a href="#"><i className={`${s.fab}  ${s.fatwitter}`}></i></a>
  	 				<a href="#"><i className={`${s.fab}  ${s.fainstagram}`}></i></a>
  	 				<a href="#"><i className={`${s.fab}  ${s.falinkedin}`}></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;
