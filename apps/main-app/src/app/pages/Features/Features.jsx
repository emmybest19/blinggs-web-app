import FeatureHero from '@/app/components/featureHero/featureHero'
import FeatureChat from '@/app/components/Featurechat/FeatureChat'
import FeaturePayment from '@/app/components/FeaturePayments/FeaturePayment'
import Groups from '@/app/components/Groups/Groups'
import Save from '@/app/components/Save/Save'
import ConvertToNiara from '@/app/components/ConvertToNaira/ConvertNaira'






export default function Features() {
    return (
       <>
            <FeatureHero />
            <FeatureChat />
            <FeaturePayment />
            <Groups />
            <Save />
            <ConvertToNiara />
       </>
    )
}