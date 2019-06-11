<template>
    <div class="mt-5">
        <b-form @submit.prevent="submitActivity" class="mb-5">
            <activity-personal-data :personal_data="activity.personal_data"></activity-personal-data>
            <activity-type-selection :activity_type_selection="activity.activity_type_selection"></activity-type-selection>
            <b-row>
                <b-col>
                    <b-button variant="primary" type="submit">Submit</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import ActivityPersonalData from '../components/ActivityForm/ActivityPersonalData'
import ActivityTypeSelection from '../components/ActivityForm/ActivityTypeSelection'
import validationMixin from '../mixins/validation'

export default {
    mixins: [
        validationMixin
    ],
    components: {
        ActivityPersonalData, ActivityTypeSelection
    },
    data() {
        return {
          reset: true,
          activity_types_components: [
            'basket', 'football', 'tennis'
          ],
          activity: {
            terms: false,
            personal_data: {
              name: '',
              surname: ''
            },
            activity_type_selection: {
              type: 1,
              date: ''
            },
            activity_selected_data: {
              team: '',
              information: ''
            }
          }
        }
    },
    methods: {
        async submitActivity() {
            const validate = await this.$validator.validateAll()
        }
    }
}
</script>
