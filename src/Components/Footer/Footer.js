import React from "react";
import "./Footer.scss";
export default function Footer() {
	return (
		<div className='container-fluid footer-main'>
			<div className='container px-4'>
				<div className='footer-top py-5 align-items-center row'>
					<div className='logoImg col-sm-3 col-md-3 col-lg-3'>
						<img
							src='https://blogzine.webestica.com/assets/images/logo-footer.svg'
							alt='dsd'
						/>
					</div>
					<div className='text col-sm-5 col-md-5 col-lg-5'>
						{" "}
						<p>
							The next-generation blog, news, and magazine theme for you to
							start sharing your stories today! This Bootstrap 5 based theme is
							ideal for all types of sites that deliver the news.
						</p>
					</div>
					<div className='inputGroup  col-sm-4 col-md-4 col-lg-4'>
						<div class='input-group d-flex gap-3'>
							<input
								type='text'
								class='form-control rounded'
								placeholder='Enter email address'
								aria-label="Recipient's username"
								aria-describedby='button-addon2'
							/>
							<button
								class='btn btn-primary rounded py-0'
								type='button'
								id='button-addon2'>
								Subscribe
							</button>
						</div>
						<div
							className='form-text'
							style={{ fontSize: "12px" }}>
							By subscribing you agree to our <a href='foo'>Privacy Policy</a>
						</div>
					</div>
				</div>
				<span
					className='line'
					style={{ height: "0.1px" }}
					mb-5></span>
				<div className='footer-middle'>
					<div className='row mt-5'>
						<div class='col-md-6 col-lg-3 mb-4'>
							<h5 class='mb-4 text-white'>Recent post</h5>

							<div class='mb-4 position-relative'>
								<div>
									<a
										href='foo'
										class='badge text-bg-danger mb-2'>
										<i class='fas fa-circle me-2 small fw-bold'></i>Business
									</a>
								</div>
								<a
									href='post-single-3.html'
									class='btn-link text-white fw-normal'>
									Up-coming business bloggers, you need to watch
								</a>
								<ul class='nav nav-divider align-items-center small mt-2 text-muted'>
									<li class='nav-item position-relative'>
										<div class='nav-link'>
											by{" "}
											<a
												href='foo'
												class='stretched-link text-reset btn-link'>
												Dennis
											</a>
										</div>
									</li>
									<li class='nav-item'>Apr 06, 2022</li>
								</ul>
							</div>

							<div class='mb-4 position-relative'>
								<div>
									<a
										href='foo'
										class='badge text-bg-info mb-2'>
										<i class='fas fa-circle me-2 small fw-bold'></i>Marketing
									</a>
								</div>
								<a
									href='post-single-3.html'
									class='btn-link text-white fw-normal'>
									How did we get here? The history of the business told through
									tweets
								</a>
								<ul class='nav nav-divider align-items-center small mt-2 text-muted'>
									<li class='nav-item position-relative'>
										<div class='nav-link'>
											by{" "}
											<a
												href='foo'
												class='stretched-link text-reset btn-link'>
												Larry
											</a>
										</div>
									</li>
									<li class='nav-item'>May 29, 2022</li>
								</ul>
							</div>
						</div>
						<div class='col-md-6 col-lg-3 mb-4'>
							<h5 class='mb-4 text-white'>Navigation</h5>
							<div class='row'>
								<div class='col-6'>
									<ul class='nav flex-column text-primary-hover'>
										<li class='nav-item'>
											<a
												class='nav-link pt-0'
												href='foo'>
												Features
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Style Guide
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Contact us
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Get Theme
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Support
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Privacy Policy
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Newsletter
											</a>
										</li>
									</ul>
								</div>
								<div class='col-6'>
									<ul class='nav flex-column text-primary-hover'>
										<li class='nav-item'>
											<a
												class='nav-link pt-0'
												href='foo'>
												News
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Career{" "}
												<span class='badge text-bg-danger ms-2'>2 Job</span>
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Technology
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Startups
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Gadgets
											</a>
										</li>
										<li class='nav-item'>
											<a
												class='nav-link'
												href='foo'>
												Inspiration
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class='col-sm-6 col-lg-3 mb-4'>
							<h5 class='mb-4 text-white'>Get Regular Updates</h5>
							<ul class='nav flex-column text-primary-hover'>
								<li class='nav-item'>
									<a
										class='nav-link pt-0'
										href='foo'>
										<i class='fab fa-whatsapp fa-fw me-2'></i>WhatsApp
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										<i class='fab fa-youtube fa-fw me-2'></i>YouTube
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										<i class='far fa-bell fa-fw me-2'></i>Website Notifications
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										<i class='far fa-envelope fa-fw me-2'></i>Newsletters
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										<i class='fas fa-headphones-alt fa-fw me-2'></i>Podcasts
									</a>
								</li>
							</ul>
						</div>
						<div class='col-sm-6 col-lg-3 mb-4'>
							<h5 class='mb-4 text-white'>Our mobile App</h5>
							<p class='text-white'>
								Download our App and get the latest Breaking News Alerts and
								latest headlines and daily articles near you.
							</p>
							<div class='row g-2'>
								<div class='col'>
									<a href='foo'>
										<img
											class='w-100'
											src='https://blogzine.webestica.com/assets/images/app-store.svg'
											alt='app-store'
										/>
									</a>
								</div>
								<div class='col'>
									<a href='foo'>
										<img
											class='w-100'
											src='https://blogzine.webestica.com/assets/images/google-play.svg'
											alt='google-play'
										/>
									</a>
								</div>
							</div>
						</div>
						<div class='row'>
							<h5 class='mb-2 text-white'>Hot topics</h5>
							<ul class='list-inline text-primary-hover lh-lg'>
								<li class='list-inline-item'>
									<a href='foo'>Covid-19</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Politics</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Entertainment</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Media</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Royalist</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>World</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Half Full</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Scouted</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Travel</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Beast Inside</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Crossword</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Newsletters</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Podcasts</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Auction 2022</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Protests</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>NewsCyber</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Education</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Sports</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Tech And Auto</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Opinion</a>
								</li>
								<li class='list-inline-item'>
									<a href='foo'>Share Market</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class='footer-bottom mt-5 px-4'>
				<div class='container-fluid'>
					<div class='row align-items-center justify-content-md-between py-4'>
						<div class='col-md-6'>
							<div class='text-center text-md-start text-primary-hover text-muted'>
								©2022{" "}
								<a
									href='https://www.webestica.com/'
									class='text-reset btn-link'
									>
									Webestica
								</a>
								. All rights reserved
							</div>
						</div>
						<div class='col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end'>
							<div class='dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end'>
								<a
									class='dropdown-toggle text-primary-hover'
									href='foo'
									role='button'
									id='languageSwitcher'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									English Edition
								</a>
								<ul
									class='dropdown-menu min-w-auto'
									aria-labelledby='languageSwitcher'>
									<li>
										<a
											class='dropdown-item'
											href='foo'>
											English
										</a>
									</li>
									<li>
										<a
											class='dropdown-item'
											href='foo'>
											German{" "}
										</a>
									</li>
									<li>
										<a
											class='dropdown-item'
											href='foo'>
											French
										</a>
									</li>
								</ul>
							</div>

							<ul class='nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0'>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										Terms
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link'
										href='foo'>
										Privacy
									</a>
								</li>
								<li class='nav-item'>
									<a
										class='nav-link pe-0'
										href='foo'>
										Cookies
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
