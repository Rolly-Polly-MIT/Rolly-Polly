function geoip(json){   
    // Get state based on IP
    var state = json.region;
    console.log(state);
    alert('Your state is currently shown as ' + state + '. If this is correct, press okay. If this is not correct, use the dropdown menu on the right side to navigate to your state.');
    // Set dynamic values in an object
    var links_obj = {
        links: {
            Alabama	        : 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote?ref=voteusa',
            Alaska	        : 'https://www.elections.alaska.gov/Core/voterregistration.php',
            Arizona	        : 'https://azsos.gov/elections/voting-election/register-vote-or-update-your-current-voter-information',
            Arkansas	    : 'https://www.sos.arkansas.gov/elections/for-voters',
            California	    : 'https://registertovote.ca.gov/',
            Colorado	    : 'https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml',
            Connecticut	    : 'https://voterregistration.ct.gov/OLVR/welcome.do',
            Delaware	    : 'https://ivote.de.gov/VoterView',
            Florida	        : 'https://registertovoteflorida.gov/home',
            Georgia	        : 'https://georgia.gov/register-to-vote',
            Hawaii	        : 'https://elections.hawaii.gov/register-to-vote/registration/',
            Idaho	        : 'https://elections.sos.idaho.gov/ElectionLink/ElectionLink/ApplicationInstructions.aspx',
            Illinois	    : 'https://ova.elections.il.gov/?Name=Em5DYCKC4wXCKQSXTgsQ9knm%2b5Ip27VC&T=637623864062530637',
            Indiana	        : 'https://www.in.gov/sos/elections/voter-information/register-to-vote/',
            Iowa	        : 'https://sos.iowa.gov/elections/voterinformation/voterregistration.html',
            Kansas	        : 'https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx',
            Kentucky	    : 'https://vrsws.sos.ky.gov/VIC/',
            Louisiana	    : 'https://www.sos.la.gov/ElectionsAndVoting/RegisterToVote/Pages/default.aspx',
            Maine	        : 'https://www.maine.gov/sos/cec/elec/voter-info/votreg.html',
            Maryland	    : 'https://elections.maryland.gov/voter_registration/index.html',
            Massachusetts	: 'https://www.sec.state.ma.us/OVR/',
            Michigan	    : 'https://mvic.sos.state.mi.us/Home/RegisterToVote',
            Minnesota	    : 'https://www.sos.state.mn.us/elections-voting/register-to-vote/',
            Mississippi 	: 'https://www.sos.ms.gov/elections-voting/voter-registration-information',
            Missouri	    : 'https://www.sos.mo.gov/elections/goVoteMissouri/register',
            Montana	        : 'https://sosmt.gov/elections/vote/',
            Nebraska	    : 'https://www.nebraska.gov/apps-sos-voter-registration/',
            Nevada	        : 'https://www.nvsos.gov/sos/elections/voters/registering-to-vote',
            NewHampshire	: 'https://sos.nh.gov/elections/voters/register-to-vote/',
            NewJersey	    : 'https://nj.gov/state/elections/voter-registration.shtmll',
            NewMexico	    : 'https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx',
            NewYork	        : 'https://www.elections.ny.gov/VotingRegister.html',
            NorthCarolina	: 'https://www.ncsbe.gov/registering',
            NorthDakota	    : 'https://vote.nd.gov/PortalListDetails.aspx?ptlhPKID=73&ptlPKID=5',
            Ohio	        : 'https://olvr.ohiosos.gov/',
            Oklahoma	    : 'https://oklahoma.gov/elections/voter-info/register-to-vote.html',
            Oregon	        : 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
            Pennsylvania	: 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx',
            RhodeIsland	    : 'https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1',
            SouthCarolina	: 'https://www.scvotes.gov/south-carolina-voter-registration-information',
            SouthDakota	    : 'https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx',
            Tennessee	    : 'https://sos.tn.gov/products/elections/register-vote',
            Texas	        : 'https://www.votetexas.gov/register/index.html',
            Utah	        : 'https://voteinfo.utah.gov/learn-about-registering-to-vote/',
            Vermont	        : 'https://sos.vermont.gov/elections/voters/registration/',
            Virginia	    : 'https://www.elections.virginia.gov/registration/',
            Washington	    : 'https://voter.votewa.gov/WhereToVote.aspx',
            WestVirginia	: 'https://ovr.sos.wv.gov/Register/Landing',
            Wisconsin	    : 'https://myvote.wi.gov/en-us/Register-To-Vote',
            Wyoming	        : 'https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx',
           }    
        }
    get_link = links_obj[ 'links' ][ state ];
    // Check if we have a link for the visitor's region, if not we'll set a default of 
    if(get_link == null) {
        display_link = 'We cannot find your location. Use the Sidebar.';
    } else {
        display_link = get_link;
    }
    var location = document.getElementById("state");
    location.innerHTML('yes' + "<a '" + display_link + "'> Click me! </a>");
    document.getElementById("links").innerHTML ='yes' + "<a '" + display_link + "'> Click me! </a>";
    console.log(display_link);
    return state;
}
 /*  for (var i = 0; i < link_elem.length; i++) {
      var str = link_elem[i].innerHTML;
     link_elem[i].innerHTML = display_link;
    }  */