<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-12 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
            <ApplicationHead 
                :departmentName='departmentNameData' 
                :positionName='positionNameData'
                :jobTime='jobTimeData'
                :jobLocation='jobLocationData'
                :salary='salaryData'
                :jobStarting='jobStartingData'
                :jobClosing='jobClosingData'
                :applicationHeadAction='applicationHeadActionData'
                :applicationHeadActionRouterUrl='applicationHeadActionRouterUrlData'
                :remoteStatus='remoteStatus'>
            </ApplicationHead>
            <router-view :contactInformation="contactInformation" :success="mailSuccess" :personalInformation="personalInformation" @update="testing" @next="next" />
        </div>
    </div>
</template>

<script>
import ApplicationHead from '@/components/ApplicationHead';
import emailjs from '@emailjs/browser';

export default {
    components: {
        ApplicationHead
    },
    data() {
        return {
            departmentNameData: 'Loading',
            positionNameData: 'Loading',
            jobTimeData: 'Loading',
            jobLocationData: 'Loading',
            salaryData: '',
            jobStartingData: 'Loading',
            jobClosingData: '',
            applicationHeadActionData: '',
            applicationHeadActionRouterUrlData: '',
            remoteStatus: 'Loading',
            mailSuccess: false,
            personalInformation: { 
                first_name: '',
                last_name: '',
                street_address: '',
                city: '',
                zip: '',
                state: '',
                country: '' 
            },
            contactInformation: { 
                email: '',
                phoneNumber: '',
                callNotifyAtAppointments: 'on',
                callNotifyAtOffers: 'on',
                communicationPreference: 'off'
            },
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            const {data} = await this.axios.get('https://pcw-api.softgarden.de/widget-api/job-list/contentForOverlay/?userId=c8b30900-46ce-451b-af8f-0380a3454890&locale=de&projectId=f11a1f2c-67a8-4a13-81b2-a48c16091208&category=8971251ad5df45fa9be0ae113a9d532a&jobId='+this.$route.params.id)
            this.jobLocationData = data.data.content.geoLocationName
            this.jobTimeData = data.data.content.workTime
            this.jobStartingData = 'Opening on ' + data.data.content.date
            this.remoteStatus = data.data.content.remoteStatus
            this.positionNameData = data.data.content.title.replace('(m/w/d)', '(m/w/d')
            this.salaryData = data.data.content.salary
            this.departmentNameData = data.data.content.title.replace('(m/w/d)', '(m/w/d')
        },
        testing(obj) {
            if(obj.applicationHeadActionData)
                this.applicationHeadActionData = obj.applicationHeadActionData
            if(obj.applicationHeadActionRouterUrlData)
                this.applicationHeadActionRouterUrlData = obj.applicationHeadActionRouterUrlData
        },
        next(obj) {
            this[obj.from] = obj;
            if (obj.send){
                emailjs.send(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_APPLICATION_TEMPLATE_ID, {from_name: 'Novatec Application System', message: 'New application!'}, process.env.VUE_APP_PUBLIC_KEY)
                .then(() => {this.mailSuccess = true})
            }
            if (obj.link) {
                this.$router.push(this.$route.matched[0].path.replace(':id', this.$route.params.id)+obj.link);
            }
        },
    }
}
</script>