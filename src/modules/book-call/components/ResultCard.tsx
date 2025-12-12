import { CheckCircle2, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import type { QualificationResult } from '@/types/preQual'

interface ResultCardProps {
  result: QualificationResult
}

export const ResultCard = ({ result }: ResultCardProps) => {
  const iconConfig = {
    great: { Icon: CheckCircle2, color: 'text-primary', emoji: '✅' },
    possible: { Icon: AlertCircle, color: 'text-warning', emoji: '⚠️' },
    'not-a-fit': { Icon: AlertCircle, color: 'text-warning', emoji: '⚠️' },
  }

  const { Icon, color, emoji } = iconConfig[result.fit]

  const titleMap = {
    great: 'Great Fit!',
    possible: 'Possible Fit',
    'not-a-fit': 'Might Not Be a Fit',
  }

  return (
    <div className="text-center mb-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="inline-block mb-4"
      >
        <Icon className={`w-16 h-16 ${color}`} strokeWidth={1.5} />
      </motion.div>

      <h2 className={`text-3xl font-bold ${color} mb-2`}>
        {emoji} {titleMap[result.fit]}
      </h2>

      <p className="text-lg text-text-secondary">{result.message}</p>
    </div>
  )
}
