import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import shule5 from '../../assets/images/shule5.jpg';



class ViewSchool extends Component {
    render() {
        return (
            <>
                <div id="blog" className="section">


                    <div className="container">


                        <div className="row">


                            <div id="main" className="col-md-9">

                                <div className="blog-post">
                                    <h2>About</h2>
                                    <p>An aeterno percipit per. His minim maiestatis consetetur et, brute tantas iracundia id sea. Vim tota nostrum reformidans te. Nam ad appareat mediocritatem, mediocrem similique usu ex, scaevola invidunt eu sed.</p>
                                    <p>Reque admodum praesent ei nec. Ad eius phaedrum conclusionemque cum, pri cu suas essent saperet. No vero ludus habemus qui. Per ex errem torquatos, eam in tale sumo mentitum. Cum nulla viderer no. Pri id antiopam volutpat evertitur, in vidit interpretaris nec.</p>
                                    <p>Reque admodum praesent ei nec. Ad eius phaedrum conclusionemque cum, pri cu suas essent saperet. No vero ludus habemus qui. Per ex errem torquatos, eam in tale sumo mentitum. Cum nulla viderer no. Pri id antiopam volutpat evertitur, in vidit interpretaris nec.</p>
                                    <h2>History</h2>
                                    <p>Te option apeirian corrumpit nec, has et tollit minimum molestie. Nam et justo everti, tale repudiandae cu nec. Aliquip legendos evertitur ne sit, mazim sadipscing sea ei. Sea no facete probatus vulputate, ex pri reque tempor. Odio adolescens ius te, docendi suscipit indoctum at qui.</p>
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    </blockquote>
                                    <p>An aeterno percipit per. His minim maiestatis consetetur et, brute tantas iracundia id sea. Vim tota nostrum reformidans te. Nam ad appareat mediocritatem, mediocrem similique usu ex, scaevola invidunt eu sed.</p>
                                    <p>Reque admodum praesent ei nec. Ad eius phaedrum conclusionemque cum, pri cu suas essent saperet. No vero ludus habemus qui. Per ex errem torquatos, eam in tale sumo mentitum. Cum nulla viderer no. Pri id antiopam volutpat evertitur, in vidit interpretaris nec.</p>
                                    <p>Te option apeirian corrumpit nec, has et tollit minimum molestie. Nam et justo everti, tale repudiandae cu nec. Aliquip legendos evertitur ne sit, mazim sadipscing sea ei. Sea no facete probatus vulputate, ex pri reque tempor. Odio adolescens ius te, docendi suscipit indoctum at qui.</p>
                                </div>

                                <div className="blog-share">
                                    <h4>Share This Post:</h4>
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                </div>

                                <div className="blog-comments">
                                    <h3>5 Comments</h3>


                                    <div className="media">
                                        <div className="media-left">
                                            <img src={shule5} alt="school" />
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">John Doe</h4>
                                            <p>Cu his iudico appareat ullamcorper, at mea ignota nostrum. Nonumy argumentum id cum, eos adversarium contentiones id</p>
                                            <div className="date-reply"><span>Oct 18, 2017 - 4:00AM</span><a href="#" className="reply">Reply</a></div>
                                        </div>


                                        <div className="media">
                                            <div className="media-left">
                                                <img src={shule5} alt="school" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">John Doe</h4>
                                                <p>Cu his iudico appareat ullamcorper, at mea ignota nostrum. Nonumy argumentum id cum, eos adversarium contentiones id</p>
                                                <div className="date-reply"><span>Oct 18, 2017 - 4:00AM</span><a href="#" className="reply">Reply</a></div>
                                            </div>
                                        </div>

                                        <div className="media">
                                            <div className="media-left">
                                                <img src={shule5} alt="school" />
                                            </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">John Doe</h4>
                                                <p>Cu his iudico appareat ullamcorper, at mea ignota nostrum. Nonumy argumentum id cum, eos adversarium contentiones id</p>
                                                <div className="date-reply"><span>Oct 18, 2017 - 4:00AM</span><a href="#" className="reply">Reply</a></div>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="media">
                                        <div className="media-left">
                                            <img src={shule5} alt="school" />
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">John Doe</h4>
                                            <p>Cu his iudico appareat ullamcorper, at mea ignota nostrum. Nonumy argumentum id cum, eos adversarium contentiones id</p>
                                            <div className="date-reply"><span>Oct 18, 2017 - 4:00AM</span><a href="#" className="reply">Reply</a></div>
                                        </div>
                                    </div>

                                    <div className="blog-reply-form">
                                        <h3>Leave Comment</h3>
                                        <form>
                                            <input className="input name-input" type="text" name="name" placeholder="Name" />
                                            <input className="input email-input" type="email" name="email" placeholder="Email" />
                                            <textarea className="input" name="message" placeholder="Enter your Message"></textarea>
                                            <button className="main-button icon-button">Submit</button>
                                        </form>
                                    </div>


                                </div>

                            </div>

                            <div id="aside" className="col-md-3">

                                <div className="widget category-widget">
                                    <h3>Resources</h3>
                                    <Link to={ROUTES.album} className="category">Album</Link>
                                    <Link to={ROUTES.events} className="category">Events</Link>
                                    <Link to={ROUTES.updates} className="category">Updates</Link>
                                    <Link to={ROUTES.uniforms} className="category">Uniforms</Link>
                                    <Link to={ROUTES.index} className="category">Fee structure</Link>
                                    <Link to={ROUTES.index} className="category">Location</Link>
                                    <Link to={ROUTES.index} className="category">Results</Link>
                                </div>
                            </div>


                        </div>


                    </div>


                </div>
            </>
        );
    }
}

export default ViewSchool;
