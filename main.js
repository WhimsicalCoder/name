let campaignNames = [];

function generateCName() {
    const accountClient = document.getElementById('account-client').innerText;
    const campaignCandidate = document.getElementById('campaign-candidate').value;
    const state = document.getElementById('state').value; // Get value directly from the input box
    const office = document.getElementById('office').value;
    const aedmsSdems = document.getElementById('aedms-sdems').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const year = document.getElementById('year').value;

    const fullName = [
        accountClient,
        campaignCandidate,
        state,
        office,
        aedmsSdems,
        startDate,
        endDate,
        year
    ].filter(Boolean).join('_');

    if (fullName) {
        campaignNames.push(fullName);
    }

    displayNames();
    openModal();
}

// ... (rest of your code)

function generateAdGroupName() {
    const accountClientAd = document.getElementById('account-client-ad').innerText;
    const campaignCandidateAd = document.getElementById('campaign-candidate-ad').value;
    const stateAd = document.getElementById('state-ad').value;  // Get value directly from the input box
    const district = document.getElementById('district').value;
    const startDateAd = document.getElementById('start-date-ad').value;
    const endDateAd = document.getElementById('end-date-ad').value;
    const platform = document.getElementById('platform').innerText;
    const mediaType = document.getElementById('media-type').innerText;
    const cpm = document.getElementById('cpm').value;
    const targetingType = document.getElementById('targeting-type').innerText;
    const dataSource = document.getElementById('data-source').innerText;
    const audience = document.getElementById('audience').value;

    const fullAdGroupName = [
        accountClientAd,
        campaignCandidateAd,
        stateAd,
        district,
        startDateAd,
        endDateAd,
        platform,
        mediaType,
        cpm,
        targetingType,
        dataSource,
        audience
    ].filter(Boolean).join('_');

    if (fullAdGroupName) {
        campaignNames.push(fullAdGroupName);
    }

    displayNames();
    openModal();
}

// ... (rest of your code)
