<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
const appName = 'Leep'
</script>

<template>
  <div class="agreement">
    <div class="T_title" style="text-align: center">
      CSAE Prevention Policy
    </div>
    <div class="T_content">
      Our app strictly prohibits any content, behavior, or activity related to child sexual abuse or exploitation (CSAE). We are fully committed to maintaining a safe and respectful environment for all users, especially minors.
    </div>
    <div class="T_title">
      1. Zero-Tolerance Policy
    </div>
    <div class="T_content">
      We have a zero-tolerance policy toward any form of child sexual abuse, exploitation, or endangerment. Any such content or behavior will result in immediate account suspension and report to relevant law enforcement authorities.
    </div>
    <div class="T_title">
      2. Content Monitoring and Reporting
    </div>
    <div class="T_content">
      Our moderation system includes both automated detection and manual review to identify and remove illegal or harmful content.
      Users can report inappropriate content directly within the app, and all reports are reviewed promptly by our moderation team.
    </div>
    <div class="T_title">
      3. Cooperation with Law Enforcement
    </div>
    <div class="T_content">
      We cooperate with law enforcement agencies in investigating and preventing CSAE incidents. Verified reports will be handled in compliance with applicable local and international laws.
    </div>
    <div class="T_title">
      4. User Education and Awareness
    </div>
    <div class="T_content">
      We provide safety guidelines to help users recognize and avoid inappropriate interactions, and to protect minors from online exploitation.
    </div>
    <div class="T_title">
      5. Account and Age Verification
    </div>
    <div class="T_content">
      We implement user verification and age restrictions where applicable to ensure that underage users are protected and adult users comply with platform standards.
    </div>
    <div class="T_title">
      6. Contact for Reporting
    </div>
    <div class="T_content">
      If you encounter or suspect any form of child exploitation, please contact our support team immediately at【{{ appName }}@{{ appName }}.site】or report directly through the in-app “Report” function.
    </div>
    <div class="T_title">
      All reports are taken seriously and handled confidentially.
    </div>
  </div>
</template>

<style  scoped>
  .agreement {
    padding: 0px 25px;
    font-size: 14px;
    margin-bottom: 14px;
    color: #666666;

    background-color: #fff;
  }
  .T_title {
    font-size: 18px;
    font-weight: 600;
    margin: 1rem 0px;
    color: #666666;
  }
  .T_content {
    font-size: 14px;
    margin-bottom: 12px;
    /* color: #666; */
  }
  .title_content {
    font-size: 12px;
    margin-bottom: 12px;
    color: #666;
    margin-left: 12px;
    margin-right:12px;
  }
</style>
