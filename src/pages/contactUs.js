import Nav from "../components/nav";
import vanceApexImage from "../Images/vanceApexMain.png";
import BackgroundMain from "../components/backgroundMain";
import Carousel from "../components/carousel";
import Carousel2 from "../components/carousel2";
import Footer from "../components/footer";

const contactUs = () => {
    return ( 
    
        <body>
        <div class="background-contact">
            <div class="backing-products">
    
                <div class="verticalContact">
                    <h1>Contact Us</h1>
                    <form >
                        <ul class="form-style-1">
                            <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                            <li>
                                <label>Email <span class="required">*</span></label>
                                <input type="email" name="field3" class="field-long"  required/>
                            </li>
                            <li>
                                <label>Reason</label>
                                <select name="field4" class="field-select" required>
                                <option value="question" >Question</option>
                                <option value="concern">Concern</option>
                                <option value="feedback">feedback(private)</option>
                                <option value="review">Review(public)</option>
                                </select>
                            </li>
                            <li>
                                <label>Your Message <span class="required">*</span></label>
                                <textarea name="field5" id="field5" class="field-long field-textarea" required></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
        
                    </form>
                </div>
            </div>
           
        </div>
    
    <Footer/>
    </body>
        );
}
 



export default contactUs;