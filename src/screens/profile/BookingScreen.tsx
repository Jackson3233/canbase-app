import React from "react";
import { Image } from "expo-image";
import { router } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { Card } from "@/components";
import { statusBarHeight } from "@/lib/constant";

const BadgeImage = require("@/assets/images/badge.png");

const BookingScreen: React.FC = () => {
  return (
    <View className="w-full h-full">
      <View className="flex flex-row items-center relative justify-between overflow-hidden bg-[#00C978] rounded-b-xl px-4"
      style={{ paddingTop: statusBarHeight }}
      >
        <Pressable className="size-10 flex items-center justify-center" onPress={() => router.back()}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </Pressable>
        <Text className="py-5 grow font-extrabold text-2xl text-white text-center">
          Buchungen
        </Text>
        <Image
          className="absolute w-10 h-full right-2"
          source={BadgeImage}
          placeholder="badge"
        />
        <View className="size-10"/>
      </View>
      <Card className="flex flex-col gap-3 m-5">
        <View className="flex flex-row items-center gap-3">
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color="black"
          />
          <Text className="text-base">Noch keine Buchungen</Text>
        </View>
        <Text className="text-sm">
          Hier findest du alle Buchungen, die dein Club für dich erstellt hat.
          Buchungen können z.B. für Aufnahmegebühren oder Mitgliedsbeiträge
          anfallen. Canbase informiert dich automatisch, sobald eine neue
          Buchung erstellt wird.
        </Text>
      </Card>
    </View>
  );
};

export default BookingScreen;
