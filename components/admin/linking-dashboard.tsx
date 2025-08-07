// components/admin/linking-dashboard.tsx
// Dashboard pour gérer facilement tes règles de maillage

"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Settings,
  Plus,
  Edit,
  Trash2,
  TrendingUp,
  Eye,
  MousePointer,
  AlertTriangle,
} from "lucide-react";
import {
  LINKING_RULES,
  LinkingRule,
  THEMES_CONFIG,
  LinkingRuleEvaluator,
} from "@/lib/dynamic-linking-system";

interface LinkingDashboardProps {
  onRulesChange?: () => void;
}

export function LinkingDashboard({ onRulesChange }: LinkingDashboardProps) {
  const [rules, setRules] = useState<LinkingRule[]>(LINKING_RULES);
  const [editingRule, setEditingRule] = useState<LinkingRule | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les règles selon le terme de recherche
  const filteredRules = rules.filter(
    (rule) =>
      rule.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.anchor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Grouper par thème pour l'affichage
  const rulesByTheme = filteredRules.reduce((acc, rule) => {
    if (!acc[rule.theme]) acc[rule.theme] = [];
    acc[rule.theme].push(rule);
    return acc;
  }, {} as Record<string, LinkingRule[]>);

  // Statistiques générales
  const stats = {
    totalRules: rules.length,
    activeRules: rules.filter((r) => r.active).length,
    highPriorityRules: rules.filter((r) => r.priority >= 90).length,
    totalClicks: rules.reduce((sum, r) => sum + r.performance.currentClicks, 0),
    avgPosition: rules
      .filter((r) => r.performance.currentPosition > 0)
      .reduce(
        (sum, r, _, arr) => sum + r.performance.currentPosition / arr.length,
        0
      ),
  };

  const toggleRuleActive = (ruleId: string) => {
    const updatedRules = rules.map((rule) =>
      rule.id === ruleId ? { ...rule, active: !rule.active } : rule
    );
    setRules(updatedRules);
    onRulesChange?.();
  };

  const deleteRule = (ruleId: string) => {
    const updatedRules = rules.filter((rule) => rule.id !== ruleId);
    setRules(updatedRules);
    onRulesChange?.();
  };

  const updateRule = (updatedRule: LinkingRule) => {
    const updatedRules = rules.map((rule) =>
      rule.id === updatedRule.id ? updatedRule : rule
    );
    setRules(updatedRules);
    setEditingRule(null);
    onRulesChange?.();
  };

  const addRule = (newRuleData: Omit<LinkingRule, "id">) => {
    const newRule: LinkingRule = {
      id: `custom_${Date.now()}`,
      ...newRuleData,
    };
    setRules([...rules, newRule]);
    setShowAddForm(false);
    onRulesChange?.();
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Header avec statistiques */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Maillage Interne</h1>
          <p className="text-gray-600 mt-1">
            Gérez vos règles de liens internes
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nouvelle Règle
        </Button>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Règles</p>
                <p className="text-2xl font-bold">{stats.totalRules}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Actives</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.activeRules}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Priorité Max</p>
                <p className="text-2xl font-bold text-orange-600">
                  {stats.highPriorityRules}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MousePointer className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Total Clics</p>
                <p className="text-2xl font-bold text-purple-600">
                  {stats.totalClicks}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-600">Position Moy.</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {stats.avgPosition.toFixed(1)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche */}
      <div className="flex space-x-4">
        <Input
          placeholder="Rechercher une règle par nom, ancre, thème ou mot-clé..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </div>

      {/* Interface principale */}
      <Tabs defaultValue="by-theme" className="space-y-4">
        <TabsList>
          <TabsTrigger value="by-theme">Par Thème</TabsTrigger>
          <TabsTrigger value="by-priority">Par Priorité</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Vue par thème */}
        <TabsContent value="by-theme" className="space-y-6">
          {Object.entries(rulesByTheme).map(([theme, themeRules]) => {
            const themeConfig =
              THEMES_CONFIG[theme as keyof typeof THEMES_CONFIG];
            return (
              <Card key={theme}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{themeConfig?.icon || "📄"}</span>
                    <span>{themeConfig?.description || theme}</span>
                    <Badge variant="outline">{themeRules.length} règles</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {themeRules.map((rule) => (
                      <RuleCard
                        key={rule.id}
                        rule={rule}
                        onToggle={() => toggleRuleActive(rule.id)}
                        onEdit={() => setEditingRule(rule)}
                        onDelete={() => deleteRule(rule.id)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        {/* Vue par priorité */}
        <TabsContent value="by-priority" className="space-y-4">
          {filteredRules
            .sort((a, b) => b.priority - a.priority)
            .map((rule) => (
              <RuleCard
                key={rule.id}
                rule={rule}
                onToggle={() => toggleRuleActive(rule.id)}
                onEdit={() => setEditingRule(rule)}
                onDelete={() => deleteRule(rule.id)}
                showPriority
              />
            ))}
        </TabsContent>

        {/* Vue performance */}
        <TabsContent value="performance" className="space-y-4">
          {filteredRules
            .sort(
              (a, b) =>
                b.performance.currentClicks - a.performance.currentClicks
            )
            .map((rule) => (
              <PerformanceRuleCard
                key={rule.id}
                rule={rule}
                onToggle={() => toggleRuleActive(rule.id)}
                onEdit={() => setEditingRule(rule)}
              />
            ))}
        </TabsContent>
      </Tabs>

      {/* Modal d'édition */}
      {editingRule && (
        <RuleEditModal
          rule={editingRule}
          onSave={updateRule}
          onClose={() => setEditingRule(null)}
        />
      )}

      {/* Modal d'ajout */}
      {showAddForm && (
        <RuleAddModal onSave={addRule} onClose={() => setShowAddForm(false)} />
      )}
    </div>
  );
}

// Composant pour une carte de règle
function RuleCard({
  rule,
  onToggle,
  onEdit,
  onDelete,
  showPriority = false,
}: {
  rule: LinkingRule;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
  showPriority?: boolean;
}) {
  const score = LinkingRuleEvaluator.calculateRuleScore(rule);

  return (
    <div
      className={`p-4 border rounded-lg ${
        rule.active
          ? "border-green-200 bg-green-50"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-3">
            <Switch checked={rule.active} onCheckedChange={onToggle} />
            <h4
              className={`font-semibold ${
                rule.active ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {rule.anchor}
            </h4>
            {showPriority && (
              <Badge
                variant={
                  rule.priority >= 90
                    ? "destructive"
                    : rule.priority >= 70
                    ? "default"
                    : "secondary"
                }
              >
                Priorité {rule.priority}
              </Badge>
            )}
            <Badge variant="outline" className="text-xs">
              Score: {score.toFixed(0)}
            </Badge>
          </div>

          <p className="text-sm text-gray-600">{rule.description}</p>

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>→ {rule.targetPage}</span>
            <span>Mots-clés: {rule.keywords.join(", ")}</span>
            {rule.performance.currentClicks > 0 && (
              <span className="text-green-600 font-medium">
                {rule.performance.currentClicks} clics
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit className="h-4 w-4" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Supprimer cette règle ?</AlertDialogTitle>
                <AlertDialogDescription>
                  Cette action est irréversible. La règle "{rule.anchor}" sera
                  définitivement supprimée.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onDelete}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Supprimer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

// Composant pour la vue performance
function PerformanceRuleCard({
  rule,
  onToggle,
  onEdit,
}: {
  rule: LinkingRule;
  onToggle: () => void;
  onEdit: () => void;
}) {
  const hasHighPotential =
    rule.performance.impressions > 1000 && rule.performance.currentClicks < 50;

  return (
    <Card className={hasHighPotential ? "border-orange-200 bg-orange-50" : ""}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-3">
              <Switch checked={rule.active} onCheckedChange={onToggle} />
              <h4 className="font-semibold">{rule.anchor}</h4>
              {hasHighPotential && (
                <Badge className="bg-orange-100 text-orange-800">
                  ⚡ Fort Potentiel
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Clics</p>
                <p className="font-semibold text-purple-600">
                  {rule.performance.currentClicks}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Impressions</p>
                <p className="font-semibold text-blue-600">
                  {rule.performance.impressions.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Position</p>
                <p className="font-semibold text-green-600">
                  {rule.performance.currentPosition.toFixed(1)}
                </p>
              </div>
              <div>
                <p className="text-gray-500">CTR Potentiel</p>
                <p className="font-semibold text-indigo-600">
                  {rule.performance.impressions > 0
                    ? (
                        (rule.performance.currentClicks /
                          rule.performance.impressions) *
                        100
                      ).toFixed(2)
                    : "0"}
                  %
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">{rule.description}</p>
          </div>

          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Modals d'édition et d'ajout (versions simplifiées pour l'exemple)
function RuleEditModal({
  rule,
  onSave,
  onClose,
}: {
  rule: LinkingRule;
  onSave: (rule: LinkingRule) => void;
  onClose: () => void;
}) {
  const [editedRule, setEditedRule] = useState(rule);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Modifier la règle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Ancre</label>
            <Input
              value={editedRule.anchor}
              onChange={(e) =>
                setEditedRule({ ...editedRule, anchor: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={editedRule.description}
              onChange={(e) =>
                setEditedRule({ ...editedRule, description: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">Priorité</label>
            <Input
              type="number"
              value={editedRule.priority}
              onChange={(e) =>
                setEditedRule({
                  ...editedRule,
                  priority: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button onClick={() => onSave(editedRule)}>Sauvegarder</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RuleAddModal({
  onSave,
  onClose,
}: {
  onSave: (rule: Omit<LinkingRule, "id">) => void;
  onClose: () => void;
}) {
  const [newRule, setNewRule] = useState({
    priority: 50,
    active: true,
    keywords: [""],
    targetPage: "",
    anchor: "",
    description: "",
    theme: "custom",
    performance: {
      currentClicks: 0,
      currentPosition: 0,
      impressions: 0,
      lastUpdated: new Date().toISOString(),
    },
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>Nouvelle règle de maillage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Ancre du lien</label>
            <Input
              placeholder="ex: notre guide complet sur..."
              value={newRule.anchor}
              onChange={(e) =>
                setNewRule({ ...newRule, anchor: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">Page cible</label>
            <Input
              placeholder="ex: /blog/mon-article"
              value={newRule.targetPage}
              onChange={(e) =>
                setNewRule({ ...newRule, targetPage: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">
              Mots-clés (séparés par des virgules)
            </label>
            <Input
              placeholder="ex: spiruline, bienfaits spiruline"
              value={newRule.keywords.join(", ")}
              onChange={(e) =>
                setNewRule({
                  ...newRule,
                  keywords: e.target.value.split(",").map((k) => k.trim()),
                })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button onClick={() => onSave(newRule)}>Créer</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
