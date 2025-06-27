import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Svg, Path, Circle, Defs, Pattern, Use } from 'react-native-svg';
import {InfoSection, JobListItem, ActionButton} from '../../components'

const LocationIcon = () => (
  <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <Path
      d="M9.31785 9.05352C8.83151 9.05352 8.36509 8.86032 8.02119 8.51642C7.6773 8.17253 7.4841 7.70611 7.4841 7.21977C7.4841 6.73343 7.6773 6.267 8.02119 5.92311C8.36509 5.57921 8.83151 5.38602 9.31785 5.38602C9.80419 5.38602 10.2706 5.57921 10.6145 5.92311C10.9584 6.267 11.1516 6.73343 11.1516 7.21977C11.1516 7.46058 11.1042 7.69903 11.012 7.92151C10.9199 8.14399 10.7848 8.34614 10.6145 8.51642C10.4442 8.6867 10.2421 8.82178 10.0196 8.91393C9.79712 9.00608 9.55866 9.05352 9.31785 9.05352ZM9.31785 2.08527C7.9561 2.08527 6.65012 2.62622 5.68721 3.58913C4.7243 4.55203 4.18335 5.85801 4.18335 7.21977C4.18335 11.0706 9.31785 16.7553 9.31785 16.7553C9.31785 16.7553 14.4524 11.0706 14.4524 7.21977C14.4524 5.85801 13.9114 4.55203 12.9485 3.58913C11.9856 2.62622 10.6796 2.08527 9.31785 2.08527Z"
      fill="#C62828"
    />
  </Svg>
);

const JobTypeIcon = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      d="M5.27967 20.5417C4.81651 20.5417 4.42016 20.377 4.09062 20.0474C3.76107 19.7179 3.59602 19.3213 3.59546 18.8575V9.59438C3.59546 9.13122 3.76051 8.73487 4.09062 8.40533C4.42072 8.07578 4.81707 7.91073 5.27967 7.91017H8.64809V6.22596C8.64809 5.7628 8.81314 5.36645 9.14325 5.03691C9.47335 4.70736 9.8697 4.54231 10.3323 4.54175H13.7007C14.1639 4.54175 14.5605 4.7068 14.8906 5.03691C15.2207 5.36701 15.3855 5.76336 15.3849 6.22596V7.91017H18.7534C19.2165 7.91017 19.6131 8.07522 19.9432 8.40533C20.2734 8.73543 20.4381 9.13178 20.4376 9.59438V18.8575C20.4376 19.3207 20.2728 19.7173 19.9432 20.0474C19.6137 20.3775 19.2171 20.5423 18.7534 20.5417H5.27967ZM10.3323 7.91017H13.7007V6.22596H10.3323V7.91017Z"
      fill="#315EF1"
    />
  </Svg>
);

const AreaCodeIcon = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      d="M15.3725 4.54175H8.66851C5.75651 4.54175 4.02051 6.27775 4.02051 9.18975V15.8857C4.02051 18.8057 5.75651 20.5417 8.66851 20.5417H15.3645C18.2765 20.5417 20.0125 18.8057 20.0125 15.8937V9.18975C20.0205 6.27775 18.2845 4.54175 15.3725 4.54175ZM17.4205 10.9417C17.4205 11.2697 17.1485 11.5417 16.8205 11.5417C16.4925 11.5417 16.2205 11.2697 16.2205 10.9417V9.18975L8.66851 16.7417H10.4205C10.7485 16.7417 11.0205 17.0137 11.0205 17.3417C11.0205 17.6697 10.7485 17.9417 10.4205 17.9417H7.22051C7.14051 17.9417 7.06051 17.9257 6.98851 17.8937C6.84451 17.8297 6.72451 17.7177 6.66051 17.5657C6.63651 17.4937 6.62051 17.4217 6.62051 17.3417V14.1417C6.62051 13.8137 6.89251 13.5417 7.22051 13.5417C7.54851 13.5417 7.82051 13.8137 7.82051 14.1417V15.8937L15.3725 8.34175H13.6205C13.2925 8.34175 13.0205 8.06975 13.0205 7.74175C13.0205 7.41375 13.2925 7.14175 13.6205 7.14175H16.8205C16.9005 7.14175 16.9725 7.15775 17.0525 7.18975C17.1965 7.25375 17.3165 7.36575 17.3805 7.51775C17.4045 7.58975 17.4205 7.66175 17.4205 7.74175V10.9417Z"
      fill="#315EF1"
    />
  </Svg>
);

const ViewMaterialIcon = () => (
  <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <Path
      d="M14.2739 1.22241L10.7739 1.51408C10.6223 1.52575 10.5027 1.65408 10.5027 1.80575V3.55575C10.5027 3.70741 10.6223 3.83575 10.7739 3.84741L14.2739 4.13908H14.2944C14.3673 4.13908 14.4402 4.11283 14.4927 4.06033C14.551 4.00491 14.586 3.92908 14.586 3.84741V1.51408C14.586 1.43241 14.551 1.35658 14.4927 1.30116C14.4344 1.24575 14.3527 1.21658 14.2739 1.22241Z"
      fill="#FAFAFA"
    />
    <Path
      d="M0.585938 6.18077C0.585938 6.34118 0.717187 6.47243 0.877604 6.47243C1.03802 6.47243 1.16927 6.34118 1.16927 6.18077C1.16927 4.08952 2.86969 2.3891 4.96094 2.3891H6.41927V4.43077C5.29344 4.43077 4.3776 5.3466 4.3776 6.47243V13.7641C4.3776 14.2453 4.77135 14.6391 5.2526 14.6391H9.91927C10.4005 14.6391 10.7943 14.2453 10.7943 13.7641V6.47243C10.7943 5.3466 9.87844 4.43077 8.7526 4.43077V3.55577H9.91927V1.80577H8.7526V1.5141C8.7526 1.35368 8.62135 1.22243 8.46094 1.22243H6.71094C6.69344 1.22243 6.67594 1.22827 6.66135 1.2341C6.54177 0.889932 6.21802 0.639099 5.83594 0.639099C5.35469 0.639099 4.96094 1.03285 4.96094 1.5141C4.96094 1.61618 4.98135 1.71535 5.01344 1.80577H4.96094C2.54885 1.80577 0.585938 3.76868 0.585938 6.18077ZM5.83594 1.22243C5.99635 1.22243 6.1276 1.35368 6.1276 1.5141C6.1276 1.67452 5.99635 1.80577 5.83594 1.80577C5.67552 1.80577 5.54427 1.67452 5.54427 1.5141C5.54427 1.35368 5.67552 1.22243 5.83594 1.22243Z"
      fill="#FAFAFA"
    />
  </Svg>
);

const DropdownArrow = () => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0166 16.9348L5.0166 8.93481L19.0166 8.93481L12.0166 16.9348Z"
      fill="black"
    />
  </Svg>
);

const WorkOrderCard = () => {
  const jobListData = [
    {
      jobTitle: "Loop rectification of fire alarm system",
      jobNumber: "12",
      zone: "Zone 1",
      technicianName: "Rajeesh Mohan",
      status: "On Progress"
    },
    {
      jobTitle: "Loop rectification of fire alarm system",
      jobNumber: "12",
      zone: "Zone 3",
      technicianName: "Prajesh mohan",
      status: "Completed"
    },
    {
      jobTitle: "Rectification of cable fault",
      jobNumber: "12",
      zone: "Zone 3",
      technicianName: "Roshan Mathew",
      status: "Completed"
    }
  ];

  return (
    <View className="bg-white rounded-lg shadow-lg p-4 m-4 relative">
      {/* Dropdown Arrow */}
      <View className="absolute right-4 top-6">
        <DropdownArrow />
      </View>

      {/* Header */}
      <View className="mb-4">
        <Text className="text-lg font-bold text-gray-900 mb-1">
          WO24568
        </Text>
        <Text className="text-base font-semibold text-gray-800">
          #1017 - Service Request
        </Text>
      </View>

      {/* Main Task */}
      <View className="mb-4">
        <Text className="text-gray-900 font-medium">
          1. Replacement of smoke detector
        </Text>
      </View>

      {/* Location */}
      <View className="flex-row items-center mb-4">
        <LocationIcon />
        <Text className="text-gray-700 ml-2">
          Kozhikode, malapraramb
        </Text>
      </View>

      {/* Job Type and Area Code */}
      <View className="flex-row justify-between mb-4">
        <View className="flex-1 mr-4">
          <InfoSection
            label="Job Type"
            value="AMC"
            icon={<JobTypeIcon />}
            layout="horizontal"
          />
        </View>
        <View className="flex-1">
          <InfoSection
            label="Area Code"
            value="Zone 1"
            icon={<AreaCodeIcon />}
            layout="horizontal"
          />
        </View>
      </View>

      {/* Job Description */}
      <View className="mb-4">
        <InfoSection
          label="Job Description"
          value="Rectification fire alarm fire fighting system"
        />
      </View>

      {/* Technician */}
      <View className="mb-4">
        <InfoSection
          label="Technician"
          value="Rajeesh Mohan"
        />
      </View>

      {/* Address */}
      <View className="mb-4">
        <InfoSection
          label="Address"
          value="Box No. 113554, Dubai,11355"
        />
      </View>

      {/* Vehicle and Materials */}
      <View className="flex-row justify-between mb-6">
        <View className="flex-1 mr-4">
          <InfoSection
            label="Assigned Vehicle :"
            value="Carry Deck cranes"
          />
        </View>
        <View className="flex-1">
          <InfoSection
            label="Materials :"
            value="Heat Detectors"
          />
        </View>
      </View>

      {/* Job List Section */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-gray-900 mb-4">
          Job List
        </Text>

        {jobListData.map((job, index) => (
          <JobListItem
            key={index}
            jobTitle={job.jobTitle}
            jobNumber={job.jobNumber}
            zone={job.zone}
            technicianName={job.technicianName}
            status={job.status}
          />
        ))}
      </View>

      {/* Action Buttons */}
      <View className="flex-row space-x-3">
        <ActionButton
          title="View Meterial"
          variant="secondary"
          icon={<ViewMaterialIcon />}
          className="flex-1"
          onPress={() => console.log('View Material pressed')}
        />
        <ActionButton
          title="Start Work"
          variant="primary"
          className="flex-1"
          onPress={() => console.log('Start Work pressed')}
        />
      </View>
    </View>
  );
};

export default WorkOrderCard;
